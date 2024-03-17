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
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  youtube,
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
  google,
  analytics,
  telegramicon,
  ethereum,
  twittericon,
  instagramicon,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  aclogo,
  dydxlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [dydxlogo, aclogo, dydxlogo, aclogo];

export const brainwaveServices = [
  "Data Tracking",
  "Reports & Notifications",
  "AI Data Analyst",
];

export const roadmap = [
  {
    id: "0",
    title: "Competitor Insight Engine",
    text: "Gain a deep understanding of your competitors' digital footprint across social media and web analytics, enabling strategic decisions.",
    date: "Sept 2023",
    status: "done",
    imageUrl: roadmap4,
    colorful: true,
  },
  {
    id: "1",
    title: "Unified Analytics Dashboard",
    text: "Access comprehensive data from various sources including Google Analytics, social media, and on-chain metrics, all in one intuitive dashboard.",
    date: "Sept 2023",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "AI-Powered Reporting",
    text: "Receive weekly reports and instant notifications on market and competitor dynamics, distilled by advanced AI algorithms.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Virtual Community Manager",
    text: "Engage with an AI-driven chatbot and data analyst to simulate an in-house community management team, enhancing user engagement and insights.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap1,
  },
];

export const collabText =
  "Monitor extensive performance metrics across multiple platforms, ensuring a full spectrum analysis of digital presence and growth.";

export const collabContent = [
  {
    id: "0",
    title: "Comprehensive Metrics Tracking",
    text: collabText,
  },
  {
    id: "1",
    title: "Competitive Benchmarking",
  },
  {
    id: "2",
    title: "AI-Driven Insights Generation",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Google",
    icon: google,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Google Analytics",
    icon: analytics,
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
    title: "Telegram",
    icon: telegramicon,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Youtube",
    icon: youtube,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Twitter",
    icon: twittericon,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Ethereum",
    icon: ethereum,
    width: 32,
    height: 38,
  },
  {
    id: "7",
    title: "Instagram",
    icon: instagramicon,
    width: 30,
    height: 22,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "Essential analytics and competitor insights for startups",
    price: "9.99",
    features: [
      "Competitor tracking on one social media channel or web",
      "Access to unified analytics dashboard for basic metrics",
    ],
  },
  {
    id: "1",
    title: "Professional",
    description: "Advanced analytics and AI-driven insights for growing businesses",
    price: "49.99",
    features: [
      "Competitor tracking on five social media channel or web",
      "Advanced AI-powered reporting and instant notifications on market changes",
      "Competitive benchmarking and detailed analytics dashboard",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Comprehensive data analytics and customization for large organizations",
    price: null,
    features: [
      "Professional plan +",
      "Custom AI chatbot tailored to your business needs",
      "Comprehensive data analysis including on-chain data for crypto projects",
      "Unlimited access to all platform features and priority 24/7 support",
    ],
  },
];


export const benefits = [
  {
    id: "0",
    title: "Competitor Tracking",
    text: "Monitor your competitors' digital performance comprehensively, including social media, web traffic, and on-chain data.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Centralized Analytics Dashboard",
    text: "View all crucial data in one place, from Google Analytics and social media statistics to Telegram and Discord interactions.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "AI-Powered Reporting",
    text: "Access in-depth insights into market and competitor analyses with automated weekly reports and instant notifications.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Community Management Bots",
    text: "Enhance user engagement and satisfaction with interactive community management experiences through AI-supported chatbots.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Data Analysis and Consultation",
    text: "Make data-driven strategic decisions by conversing with artificial intelligence in data scientist and analyst roles.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "User-Friendly Interface",
    text: "Simplify the process of managing complex data with an intuitive and user-friendly interface designed for data analysis.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Linkedin",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  }
];
