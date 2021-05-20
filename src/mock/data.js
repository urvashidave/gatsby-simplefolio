import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Urvashi Dave',
  subtitle: 'Full stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'urvashi.jpg',
  paragraphOne: 'Urvashi is a certified ScumMaster® (CSM®) software professional with 6+ years of compelling experience in delivering state-of-the-art high quality digital user web experiences using Enterprise Web and back-end technologies like PHP, Javascript, REACT JS, MSSQL, LINUX Scripting. She also enjoys learning new disruptive technologies.',

  resume: 'https://www.dropbox.com/s/fdeq4r916regnly/Urvashi%27s%20Resume.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'TMS',
    info: 'Terminal Management System',
    info2: '',
    url: '',
    repo: 'https://github.com/urvashidave/TMS6.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Kquest',
    info: 'Demographics Application',
    info2: '',
    url: '',
    repo: 'https://github.com/urvashidave/Kquest.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Flyer Program',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/urvashidave/Flyerprogram.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/urvashi-dave-webdeveloper',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/urvashidave',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
