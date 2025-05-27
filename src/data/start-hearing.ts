import type { PageType } from "src/types/template";

export const startHearing: PageType = {
  title: "Start Hearing",
  id: "start-hearing",
  slug: "start-hearing",
  type: "page",
  subtitle: "corporate website with custom CMS",
  description: "Created a custom page builder that leveraged design systems for effecient development.",
  thumbnail: {
    filename: "start-hearing/thumbnail/sh-thumbnail.png",
    alt: "",
    defaultWidth: "528px",
    mobileWidth: "320px",
  },
  roles: ["Front-End Development"],
  tools: ["HTML", "SCSS", "JavaScript", "Vue", "Nuxt", "Vuetify"],
  platforms: ["Strapi CMS"],
  headImages: [
    {
      filename: "start-hearing/header/sh-thumbnail-1a.png",
      alt: "",
      widths: [524, 1048, 1572],
      mobileWidth: "90vw",
      defaultWidth: "800px",
    },
    {
      filename: "start-hearing/header/sh-thumbnail-2a.png",
      alt: "",
      widths: [240, 278, 526, 804],
      mobileWidth: "45vw",
      defaultWidth: "500px",
    },
    {
      filename: "start-hearing/header/sh-thumbnail-3a.png",
      alt: "",
      widths: [240, 365, 690, 1055],
      mobileWidth: "45vw",
      defaultWidth: "600px",
    },
  ],
  content: {
    section1: {
      header: "Homepage",
      body: [
        "The client needed a website with a custom CMS. We used Strapi for the boilerplate and created a custom page builder. This allowed the client to easily create and update pages, integrate their rebranded design and add custom features",
        "This homepage features a good subsection of the custom page builder blocks. The page includes a hero, cards and carousel.",
      ],
      images: [
        {
          filename: "start-hearing/portfolio/sh-homepage-1.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "start-hearing/portfolio/sh-homepage-2.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "start-hearing/portfolio/sh-homepage-3.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "start-hearing/portfolio/sh-homepage-4.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
      ],
    },
    section2: {
      header: "Clinic Finder",
      body: [
        "The clinic finder is based off Google Maps API and uses a zip code search to locate clinics. The app includes custom markers and a carousel of clinic location info cards.",
      ],
      images: [
        {
          filename: "start-hearing/portfolio/SH-locator.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "600px",
        },
      ],
    },
    section3: {
      header: "Cost Calculator",
      body: [
        "This form takes multiple inputs to provide a coverage estimate in real time. The info box on the right updates to provide info for the field that is in focus.",
      ],
      images: [
        {
          filename: "start-hearing/portfolio/sh-cost-calculator-2.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "600px",
        },
      ],
    },
    section4: {
      header: "Appointment Request Form",
      body: [
        "A simple multipart form, made for ease and usability and includes inline validation.",
      ],
      images: [
        {
          filename: "start-hearing/portfolio/SH-appointment-form.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "600px",
        },
      ],
    },
    section5: {
      header: "Landing Page",
      body: [
        "The page builder includes and option for different layouts. This layout removes the main navigation and has an abbreviated footer, suitable for a landing page.",
      ],
      images: [
        {
          filename: "start-hearing/portfolio/sh-landing-page-1.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "start-hearing/portfolio/sh-landing-page-2.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "start-hearing/portfolio/sh-landing-page-3.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "start-hearing/portfolio/sh-landing-page-4.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "start-hearing/portfolio/sh-landing-page-5.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
      ],
    },
  },
};

export default startHearing;
