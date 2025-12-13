import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h3: ({ children }) => <h3 className="text-sm font-semibold text-muted-foreground mt-16">{children}</h3>,
  };
}
