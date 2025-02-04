import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Naitwa",
  lastName: "Pro",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Musician Super Mc",
  avatar: "/images/1.jpg",
  location: "Europe/Vienna", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Kiswahili"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/nelsonpro.namwaya",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/naitwapro",
  },
  {
    name: "Tiktok",
    icon: "tiktok",
    link:"https://www.tiktok.com/@naitwapro?_t=8grFBS1L8a5&_r=1",
  },
  {
    name: "Audiomack",
    icon: "music",
    link: "https://audiomack.com/naitwapro/song/ziggy",
  },
 
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:nnamwaya@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Dopest Kenyan Musician</>,
  subline: (
    <>
      Naitwa <InlineCode>PRO</InlineCode>Straight from the heart of the streets,
      <br/> redefining Kenyan music with his electrifying Sheng anthems!  🚀
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
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
    title: "About me",
    description: (
      <>
      Blending hard-hitting beats with street-savvy lyrics, he tells stories that resonate with the youth, capturing the pulse of Nairobi’s culture. From bangers that light up the clubs to conscious tracks that speak real talk, Naitwa Pro is more than an artist—he’s a movement! 🚀
      </>
    ),
  },
  // work: {
  //   display: true, // set to false to hide this section
  //   title: "Music",
  //   experiences: [
  //     {
  //       company: "FLY",
  //       timeframe: "2022 - Present",
  //       role: "Senior Design Engineer",
  //       achievements: [
  //         <>
  //           Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
  //           engagement and 30% faster load times.
  //         </>,
  //         <>
  //           Spearheaded the integration of AI tools into design workflows, enabling designers to
  //           iterate 50% faster.
  //         </>,
  //       ],
  //       images: [
  //         // optional: leave the array empty if you don't want to display images
  //         {
  //           src: "/images/projects/project-01/cover-01.jpg",
  //           alt: "Once UI Project",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       company: "Creativ3",
  //       timeframe: "2018 - 2022",
  //       role: "Lead Designer",
  //       achievements: [
  //         <>
  //           Developed a design system that unified the brand across multiple platforms, improving
  //           design consistency by 40%.
  //         </>,
  //         <>
  //           Led a cross-functional team to launch a new product line, contributing to a 15% increase
  //           in overall company revenue.
  //         </>,
  //       ],
  //       images: [],
  //     },
  //   ],
  // },
  studies: {
    display: true, // set to false to hide this section
    title: "Videos",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Tour",
    skills: [
      {
        title: " Dallas Texas Club appearance",
        description: <>Let's meet and greet at the hype and awesome dallas.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/5.webp",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/6.webp",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
 
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
