export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio Theme using Astro",
    techs: ["Astro", "Cloudfare", "Tailwind"],
    link: "https://github.com/git-harry17/harshitbisht",
  },
  {
    title: "Hand Gesture Based Volume Controller",
    techs: ["Python", "OpenCV","Mediapipe"],
    link: "https://github.com/git-harry17/Gesture-controled-volume-button",
  },
];

export default projects;
