// Central project data for portfolio (static imports ensure Next.js can optimize images reliably on all devices)
import spiceHaven from "../../public/images/projects/spiceHaven.jpg";
import theCart from "../../public/images/projects/theCart.jpg";
import mergedProj from "../../public/images/projects/mergerd-proj.png";
import textProject from "../../public/images/projects/textproject.png";
import spotifyClone from "../../public/images/projects/spotifyclone.png";
import opencvImg from "../../public/images/projects/Opencv.png";
import newsPanda from "../../public/images/projects/NewsPanda.png";
import oldPortfolio from "../../public/images/projects/OldPortfolio.png";

export const projects = [
  {
    slug: "restaurant-dashboard",
    title: "Real‑Time Restaurant Management Dashboard",
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.IO"],
    year: 2025,
    description:
      "Role‑based workflows (customer, staff, admin), live orders, auth, analytics dashboards, synchronized real‑time UI.",
    repo: "https://github.com/RohanPrasadGupta/resturant_mgr_frontend",
    demo: "https://mgr-frontend.netlify.app/pages/home",
    image: spiceHaven,
  },
  {
    slug: "the-cart-ecommerce",
    title: "E‑Commerce Platform [THE CART]",
    stack: ["Next.js", "MongoDB", "Redux", "REST"],
    year: 2025,
    description:
      "Dynamic search, advanced filtering, inventory management, secure auth, scalable modular architecture.",
    repo: "https://github.com/RohanPrasadGupta/ecommerce-proj",
    demo: "https://rpg-ecommerce.netlify.app/pages/dashboard",
    image: theCart,
  },
  {
    slug: "merged-react-mini-suite",
    title: "Merged React Mini Suite",
    stack: ["React", "APIs"],
    year: 2023,
    description:
      "Combined mini‑apps: ToDo, Weather, Expense Tracker, Jokes – showcases state & API patterns.",
    repo: "https://github.com/RohanPrasadGupta/Combined_Small_Project",
    demo: "https://rpg-merged-projects.netlify.app/",
    image: mergedProj,
  },
  {
    slug: "text-utils",
    title: "Text Utilities (Case / Count / Speech)",
    stack: ["React"],
    year: 2021,
    description:
      "Words & char counter, case transforms, copy & speech synthesis with theme toggle.",
    repo: "https://github.com/RohanPrasdGupta/React-TEXT_PROJECT-",
    demo: "https://rohanprasadgupta-react-text-project.netlify.app/",
    image: textProject,
  },
  {
    slug: "spotify-clone",
    title: "Simple Spotify Clone",
    stack: ["HTML", "CSS", "JS"],
    year: 2023,
    description:
      "One‑page interactive UI clone with basic playback preview & transitions.",
    repo: "https://github.com/RohanPrasdGupta/Simple_Spotify_CLONE/tree/main",
    demo: "https://rpg-spotify-clone1.netlify.app/",
    image: spotifyClone,
  },
  {
    slug: "face-recognition-attendance",
    title: "Face Recognition Attendance",
    stack: ["Python", "OpenCV", "MediaPipe", "Firebase"],
    year: 2023,
    description:
      "Live capture + face match to mark attendance with realtime cloud sync.",
    repo: "https://github.com/RohanPrasdGupta/HW_PROJECT-TU-",
    demo: "https://github.com/RohanPrasdGupta/HW_PROJECT-TU-",
    image: opencvImg,
  },
  {
    slug: "news-panda",
    title: "News Panda",
    stack: ["React", "Bootstrap", "API"],
    year: 2023,
    description:
      "NewsAPI integration exploring async patterns & UX skeleton states.",
    repo: "https://github.com/RohanPrasadGupta/news_app_reactJS",
    demo: "https://github.com/RohanPrasadGupta/news_app_reactJS",
    image: newsPanda,
  },
  {
    slug: "legacy-portfolio",
    title: "Legacy Portfolio",
    stack: ["Bootstrap", "HTML", "CSS"],
    year: 2021,
    description: "Early personal site iteration hosted on w3spaces.",
    repo: "https://rohanprasadgupta.w3spaces.com/",
    demo: "https://rohanprasadgupta.w3spaces.com/",
    image: oldPortfolio,
  },
];
