// Importing the images for  use in the Profile

import ceopic from "./images/CEO.jpg";
import DirectorPic from "./images/Director.jpg";
import TechnicalHeadPic from "./images/Technical-Head.jpg";
import AnthonyRozario from "./images/AnthonyRozario.png";
import SumanGhosh from "./images/SumanGhosh.jpg"
import RoniMurad from "./images/RoniMurad.jpg"
import SKSakib from "./images/SKSakib.jpg"
import SanjoyParui from "./images/SanjoyParui.jpg"
import Ehtasam from "./images/Ehtasam.jpg"

export const CEOdata = [
  {
    Name: "Mr. Nazrul Islam Mallick",
    img: ceopic,
    Designation: "CEO",
    MessageTitle: "Message from CEO :",
    MsgPara: [
      `As CEO of THN IT Solutions, I wanted to take a moment to express my heartfelt appreciation for our clients' continued trust and partnership with us. Your support has been instrumental in our journey, and we are truly grateful for the opportunity to serve you.As your dedicated technology solutions provider, we remain committed to delivering excellence and innovation in every aspect of our collaboration. Our goal is to exceed your expectations and drive your success through our services.`,
      `Finally, I want to extend my heartfelt congratulations to our dynamic team members who work tirelessly to ensure our clients' satisfaction. Their dedication, expertise, and hard work are the driving force behind our success, and I am immensely proud of each and every one of them.`,
      `Thank you once again for your continued support and partnership. We look forward to serving you and helping you achieve your business objectives.`,
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
      `I also want to take this opportunity to extend my heartfelt congratulations to our exceptional team members. Their unwavering dedication, expertise, and passion for excellence are the driving forces behind our success, and I am immensely proud of each and every one of them.`,
    ],
  },
  {
    Name: "Mrs. Sk Mohumita Mousum",
    img: TechnicalHeadPic,
    Designation: "Technical Head",
    MessageTitle: `Message from Technical Head :`,
    MsgPara: [
      `As Technical Head of THN IT Solutions, I am honored to have the opportunity to work alongside such a talented and dedicated group of individuals. Your commitment to excellence and passion for innovation are truly inspiring, and I am immensely proud to be part of this team.`,
      `I want to extend my sincerest thanks to each and every one of you for your unwavering dedication and commitment to our team and to our company's mission. Together, we have achieved great things, and I am confident that with our continued collaboration and determination, we will accomplish even more in the days ahead.`,
    ],
  },
];


export const TechnicalExpartDatas =[
    {
        Name:'Tushar Mondal',
        YearOfExp:'14',
        Designation:'Solutions Architect & Backend Application',
        expdetials:[`Banking, Insurance, Retail, Health Care`],
        skils:[
                ` Programming Languages: Java, Python`,
                ` Frameworks: Spring Boot, Django`,
                `  Database Management: MySQL,Oracle,Redshift,Aurora, MongoDB,DynamoDB`,
                ' Version Control: Git',
                ' Software Development Methodologies: Agile, Scrum',
                'Tools and Platforms: AWS, Docker,Kubernetes',
                ' Testing and Debugging: JUnit, Mockito',
                ' Other Relevant Skills: RESTful API development, Microservices architecture',
        ],
    },
    {
        Name:'Nasif Ahamed',
        YearOfExp:'13',
        Designation:'Solutions Architect & Front-End Application',
        expdetials:[`Banking, Insurance, Retail, Health Care, Telecom`],
        skils:[
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
]

export const TeamDatas=[
    {
        Name:'Suman Ghosh',
        ImageUrl: SumanGhosh,
        YearOfExp:'3',
        Designation:'SoftWare Developer',
        skills:'Python, PHP',

    },
    {
        Name:'Anthony Prakash Rozario',
        ImageUrl:AnthonyRozario,
        YearOfExp:'3',
        Designation:'SoftWare Developer',
        skills:'ReactJS, React Native, AngularJS',

    },
    {
        Name:'Ehtasam Ahmad Raza',
        ImageUrl: Ehtasam,
        YearOfExp:'5',
        Designation:'SoftWare Developer',
        skills:'ReactJS, React Native, AngularJS',

    },
    {
        Name:'Roni Murad',
        ImageUrl:RoniMurad,
        YearOfExp:'4',
        Designation:'SoftWare Developer',
        skills:'ReactJS, AngularJS',

    },
    {
        Name:'Sanjoy Parui',
        ImageUrl: SanjoyParui,
        YearOfExp:'3',
        Designation:'SoftWare Developer',
        skills:'NodeJS ',

    },
    {
        Name:'SK Sakib',
        ImageUrl:SKSakib,
        YearOfExp:'3',
        Designation:'SoftWare Developer',
        skills:'ExpessJS, NodeJS',

    },
]