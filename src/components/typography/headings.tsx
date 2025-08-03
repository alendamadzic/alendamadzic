export function HomepageHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 id="connect" className="text-lg font-semibold text-muted-foreground">
      {children}
    </h2>
  );
}

export function HomepageSubheading({ children }: { children: React.ReactNode }) {
  return (
    <p id="connect" className="text-sm text-muted-foreground mb-4">
      {children}
    </p>
  );
}
