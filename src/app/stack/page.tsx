import { StackItem } from './stack-item';
import Link from 'next/link';

const stack = [
  {
    title: 'Apps',
    items: [
      {
        title: 'Cursor',
        description:
          'My code editor of choice. The AI augmentations on-top of this fork of VS Code work really well. The VS Code plugins work out the box, see more below.',
        link: 'https://www.cursor.com/',
        icon: '/stack/cursor.png',
      },
      {
        title: 'Xcode',
        description: 'Uses when creating Swift & SwiftUI projects.',
        link: 'https://developer.apple.com/xcode/',
        icon: '/stack/xcode.avif',
      },
      {
        title: 'Warp',
        description:
          'My main terminal app. It has AI built-in which is great in case I forget a command. The autocompletion is also really good.',
        link: 'https://www.warp.dev/',
        icon: '/stack/warp.png',
      },
      {
        title: 'Yaak',
        description: 'To interact with and test REST, GraphQL & gRPC APIs.',
        link: 'https://yaak.app/',
        icon: '/stack/yaak.png',
      },
    ],
  },
  {
    title: 'Source Control',
    items: [
      {
        title: 'GitHub',
        description: 'Where all my code repositories are stored',
        link: 'https://github.com/alendamadzic',
        icon: '/stack/github.png',
      },
      {
        title: 'GitHub Desktop',
        description: 'GUI for GitHub source control client to simplify interactions with git',
        link: 'https://github.com/apps/desktop',
        icon: '/stack/github-desktop.png',
      },
    ],
  },
  {
    title: 'VSCode Setup',
    items: [
      {
        title: 'Geist Mono',
        description: 'My font of choice. This looks great in the IDE and terminal',
        link: 'https://fonts.google.com/specimen/Geist+Mono',
        icon: '/stack/geist.png',
      },
      {
        title: 'Git Blame',
        description:
          'I only use the inline blame, in the format `user, time ago • commit message` to understand why changes were made on the fly.',
        link: 'https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame',
        icon: '/stack/git-blame.png',
      },
      {
        title: 'Prettier',
        description: 'Ensures my code adheres to the preferences of the different teams I work with.',
        link: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
        icon: '/stack/prettier.png',
      },
      {
        title: 'Tailwind CSS IntelliSense',
        description: 'Makes using Tailwind CSS properties much easier. Even shows color previews.',
        link: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
        icon: '/stack/tailwind.jpg',
      },
    ],
  },
  {
    title: 'Services',
    items: [
      {
        title: 'Vercel',
        description: 'For Next.js application deployments and using Vercel AI SDK for AI based projects.',
        link: 'https://vercel.com/',
        icon: '/stack/vercel.png',
      },
      {
        title: 'Supabase',
        description:
          'For database, real-time data subscriptions, storage and authentication. My go-to backend-as-a-service.',
        link: 'https://supabase.com/',
        icon: '/stack/supabase.png',
      },
      {
        title: 'Resend',
        description: 'For email sending.',
        link: 'https://resend.com/',
        icon: '/stack/resend.png',
      },
      {
        title: 'Porkbun',
        description: 'For domain name registration. Cute name and logo.',
        link: 'https://porkbun.com/',
        icon: '/stack/porkbun.png',
      },
    ],
  },
];

export default function Stack() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Development Stack</h2>
      <p className="text-muted-foreground mb-4">All of the apps, tools and services I use to build projects.</p>
      {stack.map((section) => (
        <div key={section.title} className="mt-8">
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <div className="flex flex-col gap-4">
            {section.items.map((item) => (
              <StackItem
                key={item.title}
                title={item.title}
                description={item.description}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      ))}
      <p className="text-sm mt-20">
        This is not a comprehensive list of all the tools and services I use. It is just a list of the ones I use
        frequently.{' '}
        <Link href="mailto:alendamadzic@gmail.com" className="underline">
          Let me know
        </Link>{' '}
        if there is anything I should try.
      </p>
    </div>
  );
}
