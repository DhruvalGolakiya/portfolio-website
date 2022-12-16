export interface IServiceData {
  image: string;
  alt?: string;
  description: string[];
  name: string;
}

export const Services: IServiceData[] = [
  {
    image: "services/fast.svg",
    description: [
      "Fast load times and lag free",
      "interaction, my highest priority.",
    ],
    name: "Fast",
  },
  {
    image: "services/fast.svg",
    description: ["My layouts will work on", " any device, big or small."],
    name: "Responsive",
  },
  {
    image: "services/fast.svg",
    description: ["Strong preference for easy to use,", "intuitive UX/UI."],
    name: "Intuitive",
  },
  {
    image: "services/fast.svg",
    description: [
      "Websites don't have to be static,",
      "I love making pages come to life.",
    ],
    name: "Dynamic",
  },
];
