// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Things I&#39;ve built — applied AI products and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Full-stack &amp; applied AI engineer. B.Tech in Electrical Engineering at IIT Kanpur (minor in ML &amp; Systems).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "my GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-the-up-police-notice-information-system-was-showcased-at-the-all-india-police-conference-2024-received-a-letter-of-appreciation-from-dcp-agra-city",
          title: 'The UP Police Notice Information System was showcased at the All India Police...',
          description: "",
          section: "News",},{id: "news-started-as-an-amts-intern-at-salesforce-industries-cloud-bangalore-later-received-a-pre-placement-offer",
          title: 'Started as an AMTS Intern at Salesforce (Industries Cloud, Bangalore) — later received...',
          description: "",
          section: "News",},{id: "news-joined-sazabi-ai-san-francisco-remote-as-a-founding-engineer-building-agentic-frameworks-mcp-servers-and-product-integrations",
          title: 'Joined Sazabi AI (San Francisco, remote) as a Founding Engineer, building agentic frameworks,...',
          description: "",
          section: "News",},{id: "news-led-iit-kanpur-s-contingent-to-an-overall-2nd-position-at-inter-iit-tech-meet-14-0-ending-a-6-year-podium-gap",
          title: 'Led IIT Kanpur’s contingent to an overall 2nd position at Inter IIT Tech...',
          description: "",
          section: "News",},{id: "projects-gnn-based-aqi-forecasting",
          title: 'GNN-based AQI Forecasting',
          description: "Spatial-temporal graph neural networks for air quality forecasting across 133 locations — MADHAV Labs, IIT Kanpur",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aqi_forecasting/";
            },},{id: "projects-dream11-team-recommendation-system",
          title: 'Dream11 Team Recommendation System',
          description: "ML pipeline + React product for fantasy playing-XI optimization — Inter IIT Tech Meet 13.0",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dream11/";
            },},{id: "projects-dst-medtech-white-paper",
          title: 'DST MedTech White Paper',
          description: "National strategy white paper for reducing India&#39;s 85% MedTech import dependence — DST, Govt. of India",
          section: "Projects",handler: () => {
              window.location.href = "/projects/medtech_whitepaper/";
            },},{id: "projects-open-intelligence-for-poverty-prediction",
          title: 'Open Intelligence for Poverty Prediction',
          description: "Satellite imagery + ML to classify income levels for 7M+ families in Haryana — CDIS Labs, IIT Kanpur",
          section: "Projects",handler: () => {
              window.location.href = "/projects/poverty_prediction/";
            },},{id: "projects-sukoon-ai-driven-mental-health-support",
          title: 'Sukoon — AI-Driven Mental Health Support',
          description: "Multi-agent mental health platform on WhatsApp, built with People + AI (EkStep Foundation) and piloted with 600+ participants at IITK",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sukoon/";
            },},{id: "projects-up-police-notice-information-system",
          title: 'UP Police Notice Information System',
          description: "Multilingual RAG system for police notices, deployed in production and showcased at the All India Police Conference 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/up_police/";
            },},{id: "projects-ai-driven-video-segmentation",
          title: 'AI-Driven Video Segmentation',
          description: "Scene segmentation for educational content with Wadhwani AI — LGSS (CVPR&#39;20) and NeighborNet on multimodal features",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wadhwani_video_segmentation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%69%6A%61%6C%73%72%69%76%61%73%74%61%76%61%33%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rock42069", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Trijal-Srivastava", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/TrijalSrivasta3", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/trijal_srivastava_resume.pdf", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
