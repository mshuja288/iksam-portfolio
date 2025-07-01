// Import images
import fullstackDev from '../../assets/images/fullstack-dev.png';
import mobileWebDev from '../../assets/images/mobile-web-dev.png';
import backendDev from '../../assets/images/backend-dev.png';
import professionalDev from '../../assets/images/professional-dev.png';

export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Full Stack & Mobile Developer',
  headline: 'Building Modern Web & Mobile Applications',
  description:
    'Specializing in React.js, Flutter, Node.js, NestJS, .NET Core, and Python development. Creating scalable, efficient, and user-friendly applications for web and mobile platforms.',
  buttonLabel: 'View My Work',
  imgStart: '',
  start: '',
  img: fullstackDev,
  alt: 'Full Stack Development'
};

export const homeObjTwo = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Mobile & Web Development',
  headline: 'Cross-Platform Mobile & Web Applications',
  description:
    'Expert in building interactive and responsive applications using Flutter for mobile and React.js for web. Focus on performance, accessibility, and exceptional user experience across all platforms.',
  buttonLabel: 'Learn More',
  imgStart: 'start',
  start: 'true',
  img: mobileWebDev,
  alt: 'Mobile and Web Development'
};

export const homeObjThree = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Backend Development',
  headline: 'Robust & Scalable Server Solutions',
  description:
    'Creating powerful backend services with Node.js, NestJS, .NET Core, and Python. Implementing RESTful APIs, microservices, and real-time applications to support both web and mobile platforms.',
  buttonLabel: 'View Services',
  imgStart: '',
  start: '',
  img: backendDev,
  alt: 'Backend Development'
};

export const homeObjFour = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Why Choose Me',
  headline: 'Dedicated to Delivering Excellence',
  description:
    'With expertise in both mobile and web development, along with robust backend solutions, I deliver high-quality applications that meet your business needs. Let\'s build something amazing together.',
  buttonLabel: 'Contact Me',
  imgStart: 'start',
  start: 'true',
  img: professionalDev,
  alt: 'Professional Developer'
};
