export type Item = {
  title: string;
  description: string;
  link: string;
  icon: string;
};

export type Section = {
  title: string;
  items: Item[];
};
