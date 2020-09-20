/*-----data for carouse card -----*/
import autoWebp from '../../static/backgrounds/auto.webp'
import autoJpg from '../../static/backgrounds/auto.jpg'
import microchipWebp from '../../static/backgrounds/portfolio/microchip.webp'
import microchipJpg from '../../static/backgrounds/portfolio/microchip.jpg'
import bedroomWebp from '../../static/backgrounds/travel.webp'
import bedroomJpg from '../../static/backgrounds/travel.jpg'
import babyWebp from '../../static/backgrounds/portfolio/baby.webp'
import babyJpg from '../../static/backgrounds/portfolio/baby.jpg'
import codeWebp from '../../static/backgrounds/portfolio/code.webp'
import codeJpg from '../../static/backgrounds/portfolio/code.jpg'
import audioWebp from '../../static/backgrounds/portfolio/audio.webp'
import audioJpg from '../../static/backgrounds/portfolio/auto.jpg'
import cardWebp from '../../static/backgrounds/portfolio/card.webp'
import cardJpg from '../../static/backgrounds/portfolio/card.jpg'
import penWebp from '../../static/backgrounds/portfolio/pen.webp'
import penJpg from '../../static/backgrounds/portfolio/pen.jpg'
import linguaWebp from '../../static/backgrounds/portfolio/lingua.webp'
import linguaJpg from '../../static/backgrounds/portfolio/lingua.jpg'
import guitarWebp from '../../static/backgrounds/music.webp'
import guitarJpg from '../../static/backgrounds/music.jpg'
import notebookWebp from '../../static/backgrounds/portfolio/notebook.webp'
import notebookJpg from '../../static/backgrounds/portfolio/notebook.jpg'
import booksWebp from '../../static/backgrounds/portfolio/books.webp'
import booksJpg from '../../static/backgrounds/portfolio/books.jpg'
import cameraWebp from '../../static/backgrounds/portfolio/camera.webp'
import cameraJpg from '../../static/backgrounds/portfolio/camera.jpg'

export const navigationListData = [
  'Discovery',
  'UI/UX design',
  'Frontend',
  'Backend',
  'API',
  'Live & Maintenance',
  'Featured'
]

export const servicesDiscoveryData = {
  headerData: {
    title: 'Discovery',
    description: `Together with Business Analyst and Lead Developer, 
      we define implementation approach, 
      functional requirements, and detailed development plan, 
      according to your budget, desired timeline and business goals.`,
  },
  servicesCategoryList: [
    {
      title: 'Business Analytics',
      text: `
        We help transform your ideas and business goals into functional requirements. 
        Our specialist analyzes business processes and researches available automations. 
        Well done architecture allows to code effectively and reduce the budget. 
      `
    },
    {
      title: 'Feasibility and Architecture',
      text: `
        Feasibility study helps to find an optimal way to 
        accomplish complex tasks and integrations with 3rd party components. 
        It’s important to eliminate technical risks and search for alternatives
        before start to get succedded.
    `
    },
    {
      title: 'Specifications Creation',
      text: `
        We create a document, which describes web application structure, 
        functionality, user roles, and workflow. Based on specification, 
        we make a detailed development plan, caclulate time and budget costs, 
        after which we can begin coding.
    `
    }
  ],
  portfolioCardList: [
    {
      title: 'Auto Repair ERP',
      isCardBig: true,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/bodyshops/',
      category: 'auto',
      webpImage: autoWebp,
      jpgImage: autoJpg,
      description: `
        CRM/ERP solution for a chain of 500+ car bodyshops. 
        Dashboard for orders and supply management, 
        different access level for shops, statistics module and generation .pdf reports.
      `,
      items: [
        'Orders & Supply',
        'Roles management',
        'Production dashboard',
        'Work load calendar',
        'SMS & email alerts'
      ],
      programmingIcon: {
        isSymphony: true,
        isJs: true,
        isHtml: true,
        isSquare: true,
        isNote: true,
      }
    },
    {
      title: 'Monitoring Dashboard',
      isCardBig: false,
      category: 'engineering',
      webpImage: microchipWebp,
      jpgImage: microchipJpg,
      description: `
        System for remote control and monitoring of transformer rectifiers. 
        Private dashboard for customers of Corrosion Electronics to access data in real-time, 
        receive alerts and export reports.
      `,
      programmingIcon: {
        isNote: true,
        isSymphony: true,
        isVue: true,
        isApi2: true,
        isSquare: true,
      }
    },
    {
      title: 'Hotel Booking',
      isCardBig: false,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/bodyshops/',
      category: 'travel',
      webpImage: bedroomWebp,
      jpgImage: bedroomJpg,
      description: `
        Web application for booking hotels with special 
        offers for SME and integrations with popular hotel channels. 
        Real-time availability and prices updates based on certified 
        integrations with RezExchange, Smarthotels and Cubilis.
      `,
      programmingIcon: {
        isScreen: true,
        isNote: true,
        isSymphony: true,
        isJs: true,
        isHtml: true,
        isApi: true
      }
    },
  ],
}

export const UiUxDesignData = {
  headerData: {
    title: 'UI/UX design',
    description: `Our design team will design 
      User Interface according to your vision and business 
      goals and foresee all use cases including main user 
      stories, negative use cases, empty states and wrong data.`,
  },
  servicesCategoryList: [
    {
      title: 'Wireframes',
      text: `
      Creating set of schematic interface pages to demonstrate the workflow,
      navigation, page layout.
      `
    },
    {
      title: 'Graphical design',
      text: `
        Our designers focus on creating intuitive and user friendly interfaces.
        Additionally we monitor aligning design and specification to make sure
        that UI/UX leverage required level of functionality.
    `
    },
    {
      title: 'Interactive UI prototype',
      text: `
        Creating interactive prototype based on Wireframes or Design pages to
        demonstrate the workflow and interactions.
    `
    }
  ],
  portfolioCardList: [
    {
      title: 'Hotel Booking',
      isCardBig: true,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/powernapp/',
      category: 'travel',
      webpImage: bedroomWebp,
      jpgImage: bedroomJpg,
      description: `
        Web application for booking hotels with special 
        offers for SME and integrations with popular hotel channels. 
        Real-time availability and prices updates based on certified 
        integrations with RezExchange, Smarthotels and Cubilis.
      `,
      items: [
        'Hotels & Bookers dashboard',
        'Channel API integrations',
        'Real-time reservations sync',
        'Custom hotel search engine'
      ],
      programmingIcon: {
        isScreen: true,
        isNote: true,
        isSymphony: true,
        isJs: true,
        isHtml: true,
        isApi: true
      }
    },
    {
      title: 'Baby Gift List',
      isCardBig: false,
      category: 'lifestyle',
      webpImage: babyWebp,
      jpgImage: babyJpg,
      description: `
        Website for baby gift lists creation by adding items 
        using special browser bookmarklet. Share lists and reserve items.
      `,
      programmingIcon: {
        isSymphony: true,
        isHtml: true,
        isJs: true,
        isScreen: true
      }
    },
    {
      title: 'Security platform',
      isCardBig: false,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/spp/',
      category: 'security',
      webpImage: codeWebp,
      jpgImage: codeJpg,
      description: `
        SaaS solution to manage ads and threats blocking 
        lists to reduce malware infection and other security 
        vulnerabilities. Synching blocking lists with 
        Privoxy based proxy servers.
      `,
      programmingIcon: {
        isNote: true,
        isSymphony: true,
        isVue: true,
        isSquare: true,
        isApi2: true
      }
    }
  ],
}

export const servicesFrontEndData = {
  headerData: {
    title: 'Frontend',
    description: `
      Deliver great User Experience with lightning fast and interactive 
      frontend with modern JS frameworks like Vue and React.`,
  },
  servicesCategoryList: [
    {
      title: 'Responsive HTML/CSS',
      text: `
        We will create responsive HTML markup for Mobile, Tablet and Desktop
        devices and popular browsers.`
    },
    {
      title: 'Modern Javascript frameworks',
      text: `
        We use Vue.js and React.js frameworks to build rich and functional
        frontend. It's powerful tools to build ERP/CRM solutions, dashboards or
        SaaS with data visualization and charts.`
    },
    {
      title: 'SPA & PWA applications',
      text: `
        Modern technologies allows to create Single Page and Progressive Web
        Applications with easy and fast navigation, lots of interactive elements and
        powerful features`
    },
    {
      title: 'Templates & UI kits',
      text: `
        Usage of ready themes and UI kits allows to speed up the creation of
        dashboards and admin panels.`
    }
  ],
  portfolioCardList: [
    {
      title: 'Security platform',
      isCardBig: true,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/spp/',
      category: 'security',
      webpImage: codeWebp,
      jpgImage: codeJpg,
      description: `
        SaaS solution to manage ads and threats blocking lists 
        to reduce malware infection and other security 
        vulnerabilities. Synching blocking lists with Privoxy 
        based proxy servers.
      `,
      items: [
        'Threats management',
        'Paid subscriptions',
        'Syncing threats with proxy servers',
        'Real-time graphs for monitoring security efficiency Chargebee and Freshdesk integrations'
      ],
      programmingIcon: {
        isNote: true,
        isSymphony: true,
        isVue: true,
        isSquare: true,
        isApi2: true
      }
    },
    {
      title: 'Vocalists Social Network',
      isCardBig: false,
      category: 'music',
      webpImage: audioWebp,
      jpgImage: audioJpg,
      description: `
        Music collaborative workspace which connects 
        producers and vocalists. Dedicated developers 
        for on-going work (2+ years).
      `,
      programmingIcon: {
        isJs: true,
        isSymphony: true,
        isApi: true,
        isHtml: true,
      }
    },
    {
      title: 'Monitoring Dashboard',
      isCardBig: false,
      category: 'engineering',
      webpImage: microchipWebp,
      jpgImage: microchipJpg,
      description: `
        System for remote control and monitoring of 
        transformer rectifiers. Private dashboard for 
        customers of Corrosion Electronics to access 
        data in real-time, receive alerts and export reports.
      `,
      programmingIcon: {
        isNote: true,
        isSymphony: true,
        isVue: true,
        isApi2: true,
        isSquare: true
      }
    },
  ],
}

export const servicesBackEndData = {
  headerData: {
    title: 'Backend',
    description: `
      Team of professional PHP developers. Strong specialisation allows us to solve
      wide range of tasks from building simple CMS solutions to large ERP systems.`,
  },
  servicesCategoryList: [
      {
        title: 'Modern frameworks',
        text: `
          We use time proven technologies including PHP7 and Symfony framework.
          This stack is balanced of performance, scalability and development costs.
        `
      },
      {
        title: 'Clean well-structured code',
        text: `
          We produce robust and commented code, follow PSR and OOP standards
          and have senior developers who build the architecture and control quality.
      `
      },
      {
        title: 'Advanced tools',
        text: `
          Implementing complex features like full text search, pdf generation, image
          and video converting, web parsing using external tools.
      `
      }
    ],
  portfolioCardList: [
    {
      title: 'Auto Repair ERP',
      isCardBig: true,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/bodyshops/',
      category: 'auto',
      webpImage: autoWebp,
      jpgImage: autoJpg,
      description: `
        CRM/ERP solution for a chain of 500+ car bodyshops. 
        Dashboard for orders and supply management, 
        different access level for shops, statistics module and generation .pdf reports.
      `,
      items: [
        'Orders & Supply',
        'Roles management',
        'Production dashboard',
        'Work load calendar',
        'SMS & email alerts'
      ],
      programmingIcon: {
        isSymphony: true,
        isJs: true,
        isHtml: true,
        isSquare: true,
        isNote: true,
      }
    },
    {
      title: 'Monitoring Dashboard',
      isCardBig: false,
      category: 'engineering',
      webpImage: microchipWebp,
      jpgImage: microchipJpg,
      description: `
        System for remote control and monitoring of 
        transformer rectifiers. Private dashboard for 
        customers of Corrosion Electronics to access 
        data in real-time, receive alerts and export reports.
      `,
      programmingIcon: {
        isNote: true,
        isSymphony: true,
        isVue: true,
        isApi2: true,
        isSquare: true
      }
    },
    {
      title: 'Online Store',
      isCardBig: false,
      category: 'ecommerce',
      webpImage: cardWebp,
      jpgImage: cardJpg,
      description: `
        eCommerce solution for large Australian home appliance 
        retailer with custom backend system to manage inventory,
        products, brands, taxonomy, promotions.
      `,
      programmingIcon: {
        isSymphony: true,
        isJs: true,
        isHtml: true,
        isApi: true,
        isSwan: true
      }
    },
  ],
}

export const servicesApiData = {
  headerData: {
    title: 'API',
    description: ` 
      Extend functionality of your web app with 3rd party 
      integrations, sync work of
      different services or create your own API for mobile apps or another services.`,
  },
  servicesCategoryList: [
    {
      title: 'API integrations',
      text: `
        We've built more than 100 API integrations with different services including 
        Payment Gateways, CRM, hotel channels and marketing automation tools.`
    },
    {
      title: 'API development',
      text: `
        We can build internal and external API backend. Internal API can be used
        for iOS/Android apps and JS based frontend. External API will provide
        access to the data for your partners or users. We use Swagger and
        Postman collections.`
    },
    {
      title: 'API connections',
      text: `
        We can build middle layer backend to sync data between different 3rd
        party services, for instance, Facebook Marketing API and analytics
        dashboard.`
    }
  ],
  portfolioCardList: [
    {
      title: 'ERP Product API',
      isCardBig: true,
      isSeeMoreBtn: false,
      category: 'retail',
      webpImage: penWebp,
      jpgImage: penJpg,
      description: `
        Product search API of large promotional products distributor. 
        Collaboration with Product Data team and IT Architect to setup 
        the requirements and transform xml data files into 
        a well-structured, normalised, fast, secure, 
        developer-friendly and stateless RESTful API.
      `,
      items: [
        '18+ API methods',
        'Automatic sync data with AWS S3',
        'Parsing products data from XML',
        'Architecture for REST API and Database'
      ],
      programmingIcon: {
        isApi: true,
        isAws: true,
        isSymphony: true
      }
    },
    {
      title: 'eBay Integration',
      isCardBig: false,
      category: 'retail',
      webpImage: notebookWebp,
      jpgImage: notebookJpg,
      description: `
        Automatically publish items on eBay from 
        Pawn marketplace database. Monitor sales status 
        and retreive info about sold items.
      `,
      programmingIcon: {
        isApi: true,
        isPhp: true
      }
    },
    {
      title: 'Security platform',
      isCardBig: false,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/spp/',
      category: 'security',
      webpImage: codeWebp,
      jpgImage: codeJpg,
      description: `
        SaaS solution to manage ads and threats blocking 
        lists to reduce malware infection and other security 
        vulnerabilities. Synching blocking lists with 
        Privoxy based proxy servers.
      `,
      programmingIcon: {
        isNote: true,
        isSymphony: true,
        isVue: true,
        isSquare: true,
        isApi2: true
      }
    }
  ],
}

export const servicesLiveMaintenance = {
  headerData: {
    title: 'Live & Maintenance',
    description: `
      We will help you to prepare for release and provide you with on-going
      development services and maintenance for long term growth.`,
  },
  servicesCategoryList: [
    {
      title: 'Release preparation',
      text: `
        We will prepare full functioning demo for 
        your review and check before release.`
    },
    {
      title: 'Deployment',
      text: `
        We will setup hosting, domain, connect third-party services, add SEO tags
        and analytics tools. Additionally we can do full QA and migrate your data.`
    },
    {
      title: 'On-going support',
      text: `
        We will fix reported issues shortly and make sure the web app functioning
        smoothly. Our team is available after release and will help you to improve
        your website and extend the functionality.
    `
    }
  ],
  portfolioCardList: [
    {
      title: 'Language Schools',
      isCardBig: true,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/linguaschools/',
      category: 'education',
      webpImage: linguaWebp,
      jpgImage: linguaJpg,
      description: `
        New brand website for chain of Spanish language 
        schools with custom CMS to manage courses, 
        destinations and all dynamic info. Support 
        of several languages (English, German, Dutch, 
        Spanish, French, Italian) with own domains 
        (.com, .de, .nl, .es, .de, .fr, .it) for SEO purposes.
      `,
      items: [
        'Custom built CMS Pulling media content from external sources',
        'Multi domain and multi lingual architecture',
        'Integration with quotation tool'
      ],
      programmingIcon: {
        isApi: true,
        isHtml: true,
        isJs: true,
        isSymphony: true,
        isSpeed: true
      }
    },
    {
      title: 'Schools Directory',
      isCardBig: false,
      category: 'education',
      webpImage: booksWebp,
      jpgImage: booksJpg,
      description: `
        Portal for students and parents to discover 
        and compare private schools. Implemented in 2 
        languages — English and Arabic.
      `,
      programmingIcon: {
        isHtml: true,
        isAws: true,
        isJs: true,
        isSymphony: true
      }
    },
    {
      title: 'Video Stock Website',
      isCardBig: false,
      category: 'media',
      webpImage: cameraWebp,
      jpgImage: cameraJpg,
      description: `
        Video stock BTB platform which allows to find and order 
        collections of video clips. Elastic Search Engine for 
        smart keywords search.
      `,
      programmingIcon: {
        isAws: true,
        isJs: true,
        isSymphony: true
      }
    },
  ],
}

export const servicesFeaturedData = {
  headerData: {
    title: 'Featured',
    description: `We focus on high quality and attention to the details 
      and you will be able to take advantage of additional services we provide.`,
  },
  servicesCategoryList: [
    {
      title: 'Security',
      text: `
        In-built preventing common security vulnerabilities like cross site scriptingXSS, 
        cross site request forgery CSRF, SQL injection, authentication bypass.
      `
    },
    {
      title: 'QA',
      text: `
        Our QA department will develop test strategy and test cases, cover
        functionality with documentation and do test runs to keep high quality and
        smooth releases.
    `
    },
    {
      title: 'Speed optimisation',
      text: `
        Optimization of HTML, CSS, JavaScript for Google Insights scoring. You
        will get faster loading and higher rankings in search indexes.
    `
    }
  ],
  portfolioCardList: [
    {
      title: 'Music Courses',
      isCardBig: true,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/negina/',
      category: 'music',
      webpImage: guitarWebp,
      jpgImage: guitarJpg,
      description: `
        Musical portal for learning how to play piano and 
        other instruments. Different membership plans. 
        Songs, artists and cources directory.
      `,
      items: [
        'Online directory',
        'Interactive piano tool',
        'Subscriptions',
        'RTL support',
        'Speed optimization'
      ],
      programmingIcon: {
        isSymphony: true,
        isApi: true,
        isHtml: true,
        isJs: true,
        isSpeed: true
      }
    },
    {
      title: 'Security platform',
      isCardBig: false,
      category: 'security',
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/spp/',
      webpImage: codeWebp,
      jpgImage: codeJpg,
      description: `
        SaaS solution to manage ads and threats blocking 
        lists to reduce malware infection and other security 
        vulnerabilities. Synching blocking lists with 
        Privoxy based proxy servers.
      `,
      programmingIcon: {
        isNote: true,
        isSymphony: true,
        isVue: true,
        isSquare: true,
        isApi2: true
      }
    },
    {
      title: 'Hotel Booking',
      isCardBig: false,
      isSeeMoreBtn: true,
      seeProjectLink: '/portfolio/powernapp/',
      category: 'travel',
      webpImage: bedroomWebp,
      jpgImage: bedroomJpg,
      description: `
        Web application for booking hotels with special 
        offers for SME and integrations with popular hotel channels. 
        Real-time availability and prices updates based on certified 
        integrations with RezExchange, Smarthotels and Cubilis.
      `,
      programmingIcon: {
        isScreen: true,
        isNote: true,
        isSymphony: true,
        isJs: true,
        isHtml: true,
        isApi: true
      }
    }
  ],
}