type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "harshitbishtharry@gmail.com",
  title: "Hi, i’m Harshit 👋",
  //profile: "/profile.webp",
  description:
    "I am a 3rd-year BTech student at Graphic Era Hill University, Dehradun. I am passionate about *software development, and problem-solving*. Currently, I am exploring backend and frontend development while expanding my knowledge in AI and cloud platforms. I have experience with  C, C++, MongoDB, ExpressJS,NodeJs and ReactJS. I enjoy solving complex problems through efficient code and system design. I am always *looking for opportunities to grow and contribute to innovative projects*.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/harshit-bisht-69bb122ba/",
    },
    {
      label: "GitHub",
      link: "https://github.com/git-harry17",
    },
    
  ],
};

export default presentation;
