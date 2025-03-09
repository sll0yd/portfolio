import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: 'Senior Love',
    description: 'Full stack web app to promote social interaction for seniors',
    techStack: 'TypeScript, React, Postgres, Sequelize',
    bgImage: '/work-1.png',
    link: '/project/senior-love',
  },
  {
    title: 'Oxxy Fitness',
    description: 'Full stack web app for an australian fitness club',
    techStack: 'TypeScript, Next.js, TailwindCSS',
    bgImage: '/work-2.png',
    link: 'https://ozzy-fitness-lime.vercel.app/',
  },
  {
    title: 'Netfix clone',
    description: 'A Netflix clone built to familiarize with Vue.js',
    techStack: 'TypeScript, Vue.js, Vite',
    bgImage: '/work-3.png',
    link: 'https://sll0yd.github.io/netflix-clone-vuejs',
  },
  {
    title: 'E-commerce',
    description: 'React & Next.js',
    techStack: 'JavaScript, Redux, TailwindCSS',
    bgImage: 'work-4.png',
    link: '/project/senior-love',
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: 'Front-End Development',
    description: 'Creating responsive, interactive user interfaces to deliver exceptional user experiences...',
    link: '',
  },
  {
    icon: assets.mobile_icon,
    title: 'Back-End Development',
    description: 'Building robust backend solutions to support your web applications...',
    link: '',
  },
  {
    icon: assets.ui_icon,
    title: 'UI/UX design',
    description: 'UI/UX design focuses on creating a seamless user experience...',
    link: '',
  },
  {
    icon: assets.graphics_icon,
    title: 'Full Stack Solutions',
    description: 'Delivering end-to-end web applications by seamlessly integrating solutions for effcient development...',
    link: '',
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages',
    description: 'JavaScript & TypeScript, React.js, Next.js, Vue.jss, Node.js, Postgres, Prisma, Sequelize, TailwindCSS, ...',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'Professional Title - Web and Web Mobile Developer - BAC+2',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built few projects, see below for more details',
  },
];

export const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];
