import type { PageType } from "src/types/template";

export const pathwayClinics: PageType = {
  title: "Pathway Clinics",
  id: "pathway-clinics",
  slug: "pathway-clinics",
  type: "page",
  subtitle: "enterprise corporate cms & website",
  description: "Launched over 100 websites with 4 themes",
  thumbnail: {
    filename: "pathway-clinics/thumbnail/pathway-thumbnail.png",
    alt: "",
    defaultWidth: "528px",
    mobileWidth: "320px",
  },
  roles: ["Front-End Development"],
  tools: ["HTML", "CSS", "SCSS", "JavaScript", "Bulma"],
  platforms: ["PirhanaCMS"],
  headImages: [
    {
      filename: "h2o-web/header/serum-splash.jpg",
      alt: "Serum bottle emerging from a rippling pool of water.",
      widths: [524, 1048, 1572],
      mobileWidth: "90vw",
      defaultWidth: "524px",
    },
    {
      filename: "h2o-web/header/shiny-products.jpg",
      alt: "A trio of highly reflective skincare jars and tube.",
      widths: [240, 278, 526, 804],
      mobileWidth: "45vw",
      defaultWidth: "278px",
    },
    {
      filename: "h2o-web/header/shampoo-texture.jpg",
      alt: "A creamy green shampoo texture.",
      widths: [240, 365, 690, 1055],
      mobileWidth: "45vw",
      defaultWidth: "365px",
    },
  ],
  content: {
    section1: {
      header: "4 Themes, <br/ class='md-show'>1 Platform",
      body: [
        "The core need for this project was the ability for clinics to brand themselves. We provided 4 theme options and an ability to customize the colors. To do this I prioritized semantic CSS, so most of the heavy lifting was done with the style sheets.",
      ],
      images: [
        {
          filename: "pathway-clinics/portfolio/pathway-theme-1.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-theme-2.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-theme-3.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-theme-4.png",
          alt: "",
          mobileWidth: "68vw",
          defaultWidth: "384px",
        },
      ],
    },
    section2: {
      header: "Heroes, Main Nav, <br/ class='md-show'>Info Block &amp; Cards",
      body: [
        "There was quite a bit of testing to insure that a broad range of logo proportions would fit in the main nav. While most where accommodated, we did include the capability to add custom CSS for the outliers that didn't fit. Semantic CSS helped to accommodate the edge cases.",
      ],
      images: [
        {
          filename: "pathway-clinics/portfolio/pathway-hero-0.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-hero-1.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-hero-2.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-hero-3.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        }
      ],
    },
    section3: {
      header: "Client Testimonials",
      body: [
        "We had to institute a hard character count to ensure the integrity of the design. It also forces the users in to best practice with testimonials, not being overwritten.",
      ],
      images: [
        {
          filename: "pathway-clinics/portfolio/pathway-testimonial-0.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-testimonial-1.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-testimonial-2.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },

      ],
    },
    section4: {
      header: "Contact Us &amp; Footer",
      body: [
        "The length of clinic hours varied greatly. The challenge was to use CSS to ensure that the contact us info and Google Map iframe stayed properly scaled and centered.",
      ],
      images: [
        {
          filename: "pathway-clinics/portfolio/pathway-contact-0.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-contact-1.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },
        {
          filename: "pathway-clinics/portfolio/pathway-contact-2.png",
          alt: "",
          mobileWidth: "100vw",
          defaultWidth: "800px",
        },
      ],
    },
  },
};

export default pathwayClinics;
