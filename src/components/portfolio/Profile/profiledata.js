// Importing the images for  use in the Profile

import ceopic from "./images/CEO.webp";
import DirectorPic from "./images/Director.webp";
import TechnicalHeadPic from "./images/Technical-Head.webp";
import AnthonyRozario from "./images/AnthonyRozario.webp";
import SumanGhosh from "./images/SumanGhosh.webp";
import RoniMurad from "./images/RoniMurad.webp";
import SKSakib from "./images/SKSakib.webp";
import SanjoyParui from "./images/SanjoyParui.webp";
import Ehtasam from "./images/Ehtasam.webp";

export const CEOdata = [
  {
    Name: "Mr. Nazrul Islam Mallick",
    img: ceopic,
    Designation: "CEO",
    MessageTitle: "Message from CEO :",
    MsgPara: [
      `As THN IT Solutions' CEO, I appreciate clients' trust and partnership, ensuring excellence and innovation. Our dedicated team's hard work drives success, and we're committed to surpassing expectations, aiding your business goals. Congratulations to our dynamic team for their tireless efforts.`,
      `I congratulate our team members for their dedication and hard work. Their efforts drive our success.`,
      `Thank you for your support. We look forward to serving you.`,
    ],
  },
];

export const DirectorTechnicalHead = [
  {
    Name: "Mrs. Sureba Khatun",
    img: DirectorPic,
    Designation: "Director",
    MessageTitle: `Director's Message :`,
    MsgPara: [
      `As Director of THN IT Solutions, I am honored to extend my warmest greetings and appreciation for our client's continued trust in our services. Your partnership is the cornerstone of our success, and we are deeply grateful for the opportunity to collaborate with you.`,
    ],
  },
  {
    Name: "Mrs. Sk Mohumita Mousum",
    img: TechnicalHeadPic,
    Designation: "Technical Head",
    MessageTitle: `Message from Technical Head :`,
    MsgPara: [
      `As Technical Head of THN IT Solutions, I am honored to have the opportunity to work alongside such a talented and dedicated group of individuals. Your commitment to excellence and passion for innovation are truly inspiring.`,
    ],
  },
];

export const TechnicalExpartDatas = [
  {
    Name: "Nasif Ahamed",
    YearOfExp: "13",
    Designation: "Solutions Architect & Front-End Application",
    expdetials: [`Banking, Insurance, Retail, Health Care, Telecom`],
    skils: [
      ` Front End Technologies: HTML5, CSS3, JavaScript (ES6+), TypeScript`,
      ` JavaScript Libraries and Frameworks: React,React Native, Angular,Next Js`,
      ` Architectural Patterns: Micro Frontends, Compone-Based Architecture`,
      ` Responsive Design: Bootstrap, CSS Grid, Flexbox`,
      ` API Integration: RESTful APIs, GraphQL`,
      ` Testing: Jest, Enzyme, Cypress`,
      ` Build and Deployment: Webpack, Babel, CI/CD pipelines`,
      ` Version Control: Git`,
    ],
  },
  {
    Name: "Tushar Mondal",
    YearOfExp: "14",
    Designation: "Solutions Architect & Backend Application",
    expdetials: [`Banking, Insurance, Retail, Health Care`],
    skils: [
      ` Programming Languages: Java, Python`,
      ` Frameworks: Spring Boot, Django`,
      `  Database Management: MySQL,Oracle,Redshift,Aurora, MongoDB,DynamoDB`,
      " Version Control: Git",
      " Software Development Methodologies: Agile, Scrum",
      "Tools and Platforms: AWS, Docker,Kubernetes",
      " Testing and Debugging: JUnit, Mockito",
      " Other Relevant Skills: RESTful API development, Microservices architecture",
    ],
  },
 
];

export const TeamDatas = [
  {
    Name: "Suman Ghosh",
    ImageUrl: SumanGhosh,
    YearOfExp: "3",
    Designation: "Backend Developer",
    skills: "Python, PHP, Node.js, PostgreSQL, Git & GitHub, APIs",
  },
  {
    Name: "Anthony Prakash Rozario",
    ImageUrl: AnthonyRozario,
    YearOfExp: "3",
    Designation: "SoftWare Developer",
    skills: "ReactJS, React Native, AngularJS, UI/UX, Git & GitHub, APIs",
  },
  {
    Name: "Ehtasam Ahmad Raza",
    ImageUrl: Ehtasam,
    YearOfExp: "5",
    Designation: "SoftWare Developer",
    skills: "React, React Native, UI Libraries, UI/UX, Git & GitHub, APIs",
  },
  {
    Name: "Roni Murad",
    ImageUrl: RoniMurad,
    YearOfExp: "4",
    Designation: "SoftWare Developer",
    skills: "ReactJS, AngularJS, UI/UX, Git & GitHub, APIs",
  },
  {
    Name: "Sanjoy Parui",
    ImageUrl: SanjoyParui,
    YearOfExp: "3",
    Designation: "SoftWare Developer",
    skills: "NodeJS, ExpressJS, MongoDB, Git & GitHub, APIs",
  },
  {
    Name: "SK Sakib",
    ImageUrl: SKSakib,
    YearOfExp: "3",
    Designation: "SoftWare Developer",
    skills: "ExpessJS, NodeJS, MongoDB, Git & GitHub, APIs",
  },
];
