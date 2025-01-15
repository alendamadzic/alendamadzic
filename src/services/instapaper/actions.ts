import crypto from 'crypto';
import OAuth from 'oauth-1.0a';
import { InstapaperArticle, InstapaperConfig } from './types';

const getConfig = (): InstapaperConfig => ({
  apiUrl: process.env.INSTAPAPER_API_URL!,
  username: process.env.INSTAPAPER_USERNAME!,
  password: process.env.INSTAPAPER_PASSWORD!,
  consumerKey: process.env.INSTAPAPER_CONSUMER_KEY!,
  consumerSecret: process.env.INSTAPAPER_CONSUMER_SECRET!,
  defaultTag: process.env.INSTAPAPER_TAG,
});

export class InstapaperClient {
  private token: string | null = null;
  private tokenSecret: string | null = null;
  private oauth: OAuth;
  private config: InstapaperConfig;

  constructor() {
    this.config = getConfig();
    this.oauth = new OAuth({
      consumer: {
        key: this.config.consumerKey,
        secret: this.config.consumerSecret,
      },
      signature_method: 'HMAC-SHA1',
      hash_function: (base, key) => crypto.createHmac('sha1', key).update(base).digest('base64'),
    });
  }

  private async request(endpoint: string, data: Record<string, string> = {}) {
    const url = `${this.config.apiUrl}${endpoint}`;
    const auth = this.oauth.authorize(
      { url, method: 'POST', data },
      this.token ? { key: this.token, secret: this.tokenSecret! } : undefined
    );

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        ...this.oauth.toHeader(auth),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: Object.keys(data).length ? new URLSearchParams(data).toString() : undefined,
    });

    if (!res.ok) throw new Error(`Request failed: ${res.statusText}`);
    return res;
  }

  async authenticate(): Promise<void> {
    const res = await this.request('/oauth/access_token', {
      x_auth_username: this.config.username,
      x_auth_password: this.config.password,
      x_auth_mode: 'client_auth',
    });

    const params = new URLSearchParams(await res.text());
    this.token = params.get('oauth_token');
    this.tokenSecret = params.get('oauth_token_secret');

    if (!this.token || !this.tokenSecret) {
      throw new Error('Authentication failed: missing tokens');
    }
  }

  async getArticles(tag: string = this.config.defaultTag || 'publish'): Promise<InstapaperArticle[]> {
    if (!this.token) throw new Error('Not authenticated');

    const res = await this.request('/bookmarks/list');
    const data = await res.json();
    console.log(data);
    return data.bookmarks.filter((b: InstapaperArticle) => b.tags?.some((t) => t.name === tag));
  }
}
