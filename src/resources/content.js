import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Michael",
  lastName: "Edward",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Scientist",
  avatar: "/images/avatar.jpg",
  email: "heyxkoinophobe@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, web3 and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/airdward",
  },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Myofascial Pain Brevard</strong></>,
    href: "https://myofascialpainbrevard.com/",
  },
  subline: (
    <>
      I'm Michael, a Web Designer @ PBSEO working on creating user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Port Harcourt-based Computer Scientist with a passion for transforming complex challenges
        into simple, elegant digital solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PBSEO",
        timeframe: "Dec 2024 - ",
        role: "Web Designer",
        achievements: [
          <>
            Bringing businesses online, word different platforms and technologies
          </>,
          <>
            Built 15+ Websites and still counting, translating to more than a 50% uptick in sales and closing for clients.
          </>,

        ],
        images: [],
      },
      {
        company: "Ark Builders",
        timeframe: "Sep 2023 - May 2024",
        role: "Backend Developer",
        achievements: [
          <>
            Worked on a SaaS platform for an NGO aiding farmers in developing countries,
            adopted by over 10k users using Django (Python).
          </>,
          <>
            Incorporated user feedback to deliver new functionalities, increasing
            satisfaction and SLA by 15%.
          </>,
          <>
            Improved debugging and testing processes, boosting user retention by 30%.
          </>,
          <>
            Integrated multiple 3rd party APIs, reducing request times by over 1500ms.
          </>,
          <>
            Accelerated SDLC from analysis to deployment, ensuring high-quality delivery.
          </>,
        ],
        images: [],
      },
      {
        company: "Magic Patterns",
        timeframe: "Feb 2023 - Sep 2023",
        role: "Open Source Contributor",
        achievements: [
          <>
            Collaborated with designers and programmers to enhance frontend UX,
            contributing to 1000+ GitHub stars.
          </>,
          <>
            worked on documentation framework, improving UX by 17%.
          </>,

          <>
            Authored technical articles published across platforms.
          </>,
        ],
        images: [],
      },
      {
        company: "New Horizons, Nigeria",
        timeframe: "Mar 2021 - Sep 2021",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Engineered responsive web solutions using HTML, CSS, and React.js,
            boosting client reach by 30%.
          </>,
          <>
            Created and managed online presence for small businesses, increasing
            profits from online leads by 12%.
          </>,
          <>
            Designed a business website for a cleaning firm, raising visibility from
            0% to 50% via SEO optimization.
          </>,
        ],
        images: [],
      },

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Federal University of Petroleum Resources",
        description: <>Computer Science.</>,
      },

    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python & Django",
        description: <>Backend development, APIs, Celery tasks, and scalable SaaS applications</>,
        images: [],
      },
      {
        title: "JavaScript & TypeScript",
        description: <>Frontend and backend development with strong typing for maintainable apps</>,
        images: [],
      },
      {
        title: "React.js & Next.js",
        description: <>Modern frontend frameworks for dynamic, server-rendered, and static sites</>,
        images: [],
      },
      {
        title: "SQL & PostgreSQL",
        description: <>Database design, querying, and optimization for reliable data storage</>,
        images: [],
      },
      {
        title: "Docker & Redis",
        description: <>Containerization, caching, and performance optimization</>,
        images: [],
      },
      {
        title: "TailwindCSS",
        description: <>Utility-first styling for rapid, responsive UI development</>,
        images: [],
      },
      
      {
        title: "Git & Agile Tools",
        description: <>Version control, collaboration, and project tracking with Jira</>,
        images: [],
      },

    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
