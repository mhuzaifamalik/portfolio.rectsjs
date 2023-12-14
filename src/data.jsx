

// import { FaIconName } from 'react-icons/fa';
// import { FiIconName } from 'react-icons/fi';
import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.jpeg';
  import Work2 from './assets/project-2.jpg';
  import Work3 from './assets/project-3.jpeg';
  import Work4 from './assets/project-4.jpeg';
  import Work5 from './assets/project-5.jpg';
  import Work6 from './assets/project-6.jpg';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Muhammad Huzaifa',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Malik',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '22 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Pakistan',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'karachi',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+923152235975',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'huzaifamalikmalik465@gmail.com',
    },
  
    {
      id: 9,
      title: 'Skype : ',
      description: 'Muhammad Huzaifa',
    },
  
    {
      id: 10,
      title: 'Langages : ',
      description: 'Urdu, English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '3+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '70+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '81+',
      title: 'Happy <br /> Customers',
    },
  
    {
      id: 4,
      no: '53+',
      title: ' Awards <br /> Won',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2022 - PRESENT',
      title: 'Web Developer <span> (Aptech) </span>',
      desc: 'Crafting digital experiences and bringing ideas to life at Aptech as a dedicated Web Developer. Transforming innovative concepts into responsive and user-friendly websites. Passionately coding, problem-solving, and staying at the forefront of web technologies. Collaborating with a dynamic team to deliver cutting-edge solutions that redefine online presence and elevate user engagement.'
    },
    
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2018 - 2019',
      title: 'Innovative <span> Computer Education </span>',
      desc: 'Embarked on a transformative journey at Innovative Computer Education, completing a comprehensive one-year diploma in computer basics. Acquired proficiency in a wide array of skills, including advanced usage of MS Office, intricate 3D components, and other fundamental computer skills. Applied theoretical knowledge to real-world scenarios, fostering a deep understanding of computer applications and technology. Successfully navigated the dynamic landscape of computer education, laying the foundation for a successful career in the tech industry.'
    },
        
  

  
    {
      id: 3,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2022 - present',
      title: 'Frontend Developer <span> (One Source Tech) </span>',
      desc: 'Pioneering innovation and excellence at One Source Tech, my inaugural professional venture. As a Software Engineer, I have been instrumental in developing cutting-edge solutions that drive the companys technological prowess. Collaborating with a dynamic team Ive contributed to the design, development, and deployment of robust software applications, elevating efficiency and performance. My journey at One Source Tech has been marked by continuous learning, problem-solving, and a commitment to delivering high-quality solutions that meet and exceed client expectations.'
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaBriefcase />,
      year: '2021 - 2022',
      title: 'Frontend Developer <span> (Q technologies) </span>',
      desc: 'With a comprehensive skill set in HTML, CSS, and JavaScript, coupled with hands-on experience in React.js, I have been a pivotal force in crafting immersive and user-friendly web applications. Over the past two years, Ive successfully contributed to various projects, demonstrating a keen eye for design and a commitment to delivering seamless user experiences. Whether its translating mockups into responsive layouts, optimizing website performance, or integrating complex functionalities with React.js, I thrive on tackling challenges and exceeding project expectations. My passion for clean, maintainable code and staying abreast of the latest frontend technologies positions me as a valuable asset in any development team.'
    }

  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '95',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '80',
    },
  
    {
      id: 3,
      title: 'Css',
      percentage: '80',
    },
  
    {
      id: 4,
      title: 'react js',
      percentage: '60',
    },
  
    {
      id: 5,
      title: 'Responsive Design',
      percentage: '95',
    },
  
    {
      id: 6,
      title: 'Jquery',
      percentage: '50',
    },
  
    {
      id: 7,
      title: 'Debugging',
      percentage: '65',
    },
  
    {
      id: 8,
      title: 'Chat GPT',
      percentage: '65',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Landing Page',
      details: [
        {
          title: 'Project : ',
          desc: 'Website',
        },
        {
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          title: 'Language : ',
          desc: 'React JS, Node JS',
        },
        {
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dibble.com',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  