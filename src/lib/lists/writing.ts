export interface Post {
  title: string;
  slug: string;
  date: string;
}

export const writing: Post[] = [
  {
    title: 'Stop Filling the Jar: Why Arbitrary Deadlines Kill Good Software',
    slug: 'stop-filling-the-jar',
    date: '2024-12-12',
  },
  {
    title: "Why Phase-Gate Methodology Isn't Dead (It Just Needed Better Software)",
    slug: 'why-phase-gate-methodology-isnt-dead',
    date: '2025-12-17',
  },
];
