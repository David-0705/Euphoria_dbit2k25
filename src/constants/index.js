import { light } from "@mui/material/styles/createPalette";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  dbc,
  dbiti,
  dbit,
  dbcl,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  youtube,
  img0,
  img3,
  img1,
  img2,
  img4,
  img5,
  img6,
  img7,
  bmsLogo,
  compsLogo,
  domfLogo,
  extcLogo,
  hsLogo,
  itLogo,
  mechLogo,
  itiLogo,
  compsCaptain,
  mechCaptain,
  extcCaptain,
  itCaptain,
  itiCaptain,
  hsCaptain,
  domfCaptain,
  bmsCaptain,
} from "../assets";
import { title } from "framer-motion/client";

export const dptpg =[
  // {
  //   id: "0",
  //   title: "Points",
  //   url: "/#/points",
  // }
]

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },

  {
    id: "2",
    title: "Points",
    url: "/#/points",
  },
  {
    id: "3",
    title: "Departments",
    url: "/#/department",
  },
 
  {
    id: "5",
    title: "Tier List",
    url: "/#/tierlist",
  },
  {
    id: "6",
    title: "Schedules",
    url: "/#/schedules",
  },
  {
    id: "7",
    title: "Co-ordinators",
    url: "/#/coordinators",
  }
  
];

export const pointsnav = [];
export const tierlist = [];
export const schedulenav =[];
export const capimg = [compsCaptain,
                      mechCaptain,
                      itCaptain,
                      extcCaptain,
                      domfCaptain,
                      itiCaptain,
                      hsCaptain,
                      bmsCaptain];

export const homeNavigation = [
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [dbit, dbc, dbcl, dbiti];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "MANAGEMENT",
    text: " ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: "https://www.instagram.com/euphoriadbcl/",
  },
  {
    id: "1",
    title: "DEPT. CAPTAINS",
    text: " ",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: "/#/department",
  },
  {
    id: "2",
    title: "CO-ORDINATORS",
    text: " ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: "/#/coordinators",
  },
];

export const socials = [
  {
    id: "0",
    title: "youtube",
    iconUrl: youtube,
    url: "https://www.youtube.com/@euphoriadbcl6187",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/euphoriadbcl/",
  },
];

export const departments = [
  {
    id: "0",
    department: "COMPS",
    url: "/department/comps",
    color1: "#F6EED8",
    color2: "#F6EED8",
    captain: "Suraj Naik",
    deptlogo: compsLogo,
  },
  {
    id: "1",
    department: "MECH",
    url: "/department/mech",
    color1: "#A020F0",
    color2: "#000",
    captain: "Prabind Kapar",
    deptlogo: mechLogo,
  },
  {
    id: "2",
    department: "IT",
    url: "/department/it",
    color1: "#00a900ff",
    color2: "#00FF00",
    captain: "Abhishek Agrahari",
    deptlogo: itLogo,
  },
  {
    id: "3",
    department: "EXTC",
    url: "/department/extc",
    color1: "#FF0000",
    color2: "#000",
    captain: "Aryan Arde",
    deptlogo: extcLogo,
  },
  {
    id: "4",
    department: "DOMF",
    url: "/department/dommf",
    color1: "#008080",
    color2: "#FFF",
    captain: "Kevin Carvalho",
    deptlogo: domfLogo,
  },
  {
    id: "5",
    department: "ITI",
    url: "/department/iti",
    color1: "	#FFC0CB",
    color2: "#FFF",
    captain: "Pratam Koli",
    deptlogo: itiLogo,
  },
  {
    id: "6",
    department: "HS",
    url: "/department/hs",
    color1: "#b122b1ff",
    color2: "#000",
    captain: "Shezaad Khan",
    deptlogo: hsLogo,
  },
  {
    id: "7",
    department: "BMS",
    url: "/department/bms",
    color1: "	#025c9bff",
    color2: "#FFF",
    captain: "Thomas Anthony",
    deptlogo: bmsLogo,
  },
];

export const captainsData = [
  { department: "MECH" },
  { department: "COMPS" },
  { department: "E.X.T.C" },
  { department: "I.T" },
  { department: "H.S" },
  { department: "B.M.S" },
  { department: "D.O.M.F" },
  { department: "I.T.I" },
];

export const members = [
  {
    id: 1,
    name: "NEVILLE D'SOUZA",
    position: "LEAD CO-ORDINATOR",
    image:'./src/assets/card/nevile.webp',
    //import the images
  },
  {
    id: 2,
    name: "ZAIBA SHAIKH",
    position: "LEAD CO-ORDINATOR",
     image:'./src/assets/card/zeba.webp',
  },
  {
    id: 3,
    name: "TANISHQ BANE",
    position: "SPONSORSHIP LEAD",
     image:'./src/assets/card/tanishq.webp',
     
  },
  {
    id: 4,
    name: "ANDRE FERNANDES",
    position: "WEB DEVELOPMENT LEAD",
    image:'./src/assets/card/andre.webp',
  },
  {
    id: 5,
    name: "PRATHAMESH PARAB",
    position: "SENIOR CO-ORDINATOR",
     image:'./src/assets/card/prathamesh.webp',
    
    
  },
  {
    id: 6,
    name: "NICHELLE D’SOUZA",
    position: "SENIOR CO-ORDINATOR",
     image:'./src/assets/card/nichelle.webp',
  },
  {
    id: 7,
    name: "DWAYNE GEORGE NIXON",
    position: "SENIOR CO-ORDINATOR",
     image:'./src/assets/card/dwyane.webp',
  },
  {
    id: 8,
    name: "PRANJAL SAHU",
    position: "SENIOR CO-ORDINATOR",
     image:'./src/assets/card/pranjal.webp',
  },
  {
    id: 9,
    name: "AMEY DALVI",
    position: "SENIOR CO-ORDINATOR",
     image:'./src/assets/card/amey.webp',
  },
  {
    id: 10,
    name: "TIYA TRAVAS",
    position: "SENIOR CO-ORDINATOR",
     image:'./src/assets/card/tiya.webp',
  },
  {
    id: 11,
    name: "AAYUSH PULKUNDWAR",
    position: "JUNIOR CO-ORDINATOR",
     image:'./src/assets/card/aayush.webp',
  },
  {
    id: 12,
    name: "LAETICIA COSTA CORREIA",
    position: "JUNIOR CO-ORDINATOR",
     image:'./src/assets/card/laetcia.webp',
  },
  {
    id: 13,
    name: "NICOLE MENEZES",
    position: "JUNIOR CO-ORDINATOR",
     image:'./src/assets/card/nicole.webp',
  },
  {
    id: 14,
    name: "SEONA LOBO",
    position: "JUNIOR CO-ORDINATOR",
     image:'./src/assets/card/seona.webp',
  },
  {
    id: 15,
    name: "JOSHUA DIAS",
    position: "JUNIOR CO-ORDINATOR",
     image:'./src/assets/card/joshua.webp',
  },
  {
    id: 16,
    name: "LUV SANTOSH SHAH",
    position: "JUNIOR CO-ORDINATOR",
  },
];

//updates


//     comps: [
//       { "Event": "Table Tennis Boys Singles", "Place": "2nd", "Winner": "Nigel" },
//       { "Event": "Table Tennis Girls Doubles", "Place": "3rd", "Winner": "Nicole Saldanha & Janice" },
//       { "Event": "Chess", "Place": "1st", "Winner": "Dhruvin" },
//       { "Event": "Chess", "Place": "2nd", "Winner": "Sujal" },
//       { "Event": "Chess", "Place": "3rd", "Winner": "Jashith" },
//       { "Event": "Discus Throw Boys", "Place": "1st", "Winner": "Pratik Daga" },
//       { "Event": "Discus Throw Girls", "Place": "1st", "Winner": "Verushka Fernandes" },
//       { "Event": "Shot Put Girls", "Place": "2nd", "Winner": "Verushka Fernandes" },
//       { "Event": "Javelin Throw Girls", "Place": "1st", "Winner": "Verushka Fernandes" },
//       { "Event": "Box Cricket Boys", "Place": "1st", "Winner": "IT" },
//       { "Event": "Box Cricket Girls", "Place": "1st", "Winner": "COMPS" },
//       { "Event": "Basketball Girls", "Place": "1st", "Winner": "Comps" }
//     ],

//     mech: [
//       { "Event": "Table Tennis Boys Singles", "Place": "3rd", "Winner": "Shubham" },
//       { "Event": "Table Tennis Doubles", "Place": "1st", "Winner": "Zreh Kotwal & Shubham Palande" },
//       { "Event": "Table Tennis Doubles", "Place": "2nd", "Winner": "Neel Ved & Priyank Panchal" },
//       { "Event": "Table Tennis Doubles", "Place": "3rd", "Winner": "Yashneil & Abdul" },
//       { "Event": "80m Boys", "Place": "1st", "Winner": "Atharva Kadam" },
//       { "Event": "80m Boys", "Place": "2nd", "Winner": "Geden Dsouza" },
//       { "Event": "80m Boys", "Place": "3rd", "Winner": "Tyrelles Paires" },
//       { "Event": "200m Boys", "Place": "1st", "Winner": "Atharva Kadam" },
//       { "Event": "200m Boys", "Place": "2nd", "Winner": "Jaeden" },
//       { "Event": "200m Boys", "Place": "3rd", "Winner": "Adrian Soans" },
//       { "Event": "400m Boys", "Place": "1st", "Winner": "Atharva Kadam" },
//       { "Event": "400m Boys", "Place": "2nd", "Winner": "Prathamesh Parab" },
//       { "Event": "400m Boys", "Place": "3rd", "Winner": "Jaeden D'Souza" },
//       { "Event": "800m Boys", "Place": "1st", "Winner": "Atharva Kadam" },
//       { "Event": "800m Boys", "Place": "3rd", "Winner": "Jaeden D'Souza" },
//       { "Event": "Relay Boys", "Place": "1st", "Winner": "Mech" },
//       { "Event": "Tug of War Boys", "Place": "2nd", "Winner": "Mech" },
//       { "Event": "VolleyBall Boys", "Place": "1st", "Winner": "MECH" },
//       { "Event": "Kabaddi", "Place": "2nd", "Winner": "Mech" },
//       { "Event": "Javelin Throw Boys", "Place": "1st", "Winner": "Vishwanath" },
//       { "Event": "Shot Put Boys", "Place": "1st", "Winner": "Harjinder Singh" }
//     ],

//     extc: [
//       { "Event": "Singles Carrom", "Place": "1st", "Winner": "Anup" },
//       { "Event": "Singles Carrom", "Place": "3rd", "Winner": "Anuj" },
//       { "Event": "Doubles Carrom", "Place": "1st", "Winner": "Rohith" },
//       { "Event": "200m Girls", "Place": "1st", "Winner": "Chloe Xaviers" },
//       { "Event": "400m Girls", "Place": "1st", "Winner": "Tia Xavier's" },
//       { "Event": "Discus Throw Girls", "Place": "2nd", "Winner": "Simran Ahiwale" },
//       { "Event": "Javelin Throw Girls", "Place": "2nd", "Winner": "Nidhi Kamble" },
//       { "Event": "Tug of War Girls", "Place": "1st", "Winner": "EXTC" },
//       { "Event": "VolleyBall Girls", "Place": "2nd", "Winner": "EXTC" },
//       { "Event": "Rink Football Girls", "Place": "2nd", "Winner": "Comps (Team Grace)" }
//     ],

//     dommf: [
//       { "Event": "80m Girls", "Place": "1st", "Winner": "Chloe Xaviers" },
//       { "Event": "80m Girls", "Place": "2nd", "Winner": "Sofia Nadar" },
//       { "Event": "Relay Girls", "Place": "2nd", "Winner": "DOMF" },
//       { "Event": "Mixed Relay", "Place": "1st", "Winner": "DOMF" },
//       { "Event": "Basketball Boys", "Place": "2nd", "Winner": "Extc" },
//       { "Event": "Rink Football Boys", "Place": "3rd", "Winner": "DOMF" }
//     ],

//     it: [
//       { "Event": "Box Cricket Boys", "Place": "1st", "Winner": "It  " },
//       { "Event": "Tug of War Boys", "Place": "1st", "Winner": "It" },
//       { "Event": "Relay Girls", "Place": "3rd", "Winner": "IT" },
//       { "Event": "Mixed Relay", "Place": "3rd", "Winner": "IT" },
//       { "Event": "Rink Football Boys", "Place": "1st", "Winner": "It" },
//       { "Event": "Javelin Throw Boys", "Place": "3rd", "Winner": "Soham Patil" }
//     ],

//     hs: [
//       { "Event": "Discus Throw Boys", "Place": "2nd", "Winner": "Raj Thombare" },
//       { "Event": "Kabaddi", "Place": "1st", "Winner": "HS" }
//     ],

//     bmm: [
//       { "Event": "80m Girls", "Place": "3rd", "Winner": "Shivani Sawant" },
//       { "Event": "400m Girls", "Place": "3rd", "Winner": "Shivani Sawant" },
//       { "Event": "Relay Girls", "Place": "1st", "Winner": "BMM" },
//       { "Event": "Box Cricket Girls", "Place": "2nd", "Winner": "BMM" },
//       { "Event": "Throwball", "Place": "2nd", "Winner": "BMM" },
//       { "Event": "Basketball Girls", "Place": "3rd", "Winner": "BMM" }
//     ]
//   }
//   }
// ]
