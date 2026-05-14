const translations = {
  pt: {
    saveAsPdf: 'Salvar como PDF',
    portuguese: 'Português',
    english: 'English',
    experience: 'Experiência',
    education: 'Formação Acadêmica',
    technicalSkills: 'Habilidades técnicas',
    languages: 'Idiomas',
    softSkills: 'Soft Skills',
    certificates: 'Certificados',
    projects: 'Projetos',
    // experience data
    experienceData: [
      {
        company: "biz.simplesnologia",
        period: "jul. 2025 - atualmente",
        position: "Desenvolvedora Front-end",
        items: [
          "Desenvolvimento de interfaces web responsivas com Next.js, aplicando boas práticas de JavaScript/TypeScript, React e UI/UX design para garantir usabilidade e performance.",
          "Criação de wireframes e protótipos interativos no Figma, alinhando identidade visual e experiência do usuário antes da implementação.",
          "Construção de aplicações mobile cross-platform com React Native, priorizando acessibilidade e consistência da experiência entre diferentes dispositivos.",
          "Integração de APIs REST e serviços externos, com foco em escalabilidade, segurança e performance no consumo de dados.",
          "Colaboração com equipes multidisciplinares em metodologias ágeis (Scrum/Kanban), participando de code reviews e contribuindo para melhorias contínuas.",
          "Utilização de ferramentas de versionamento (Git/GitHub) e acompanhamento de métricas de desempenho para otimização contínua do produto."
        ]
      },
      {
        company: "Sala Maker",
        period: "fev. 2025 - jul. 2025",
        position: "Monitora Bolsista - Desenvolvedora",
        items: [
          "Estágio supervisionado | Iniciação Científica",
          "Responsável pela criação de wireframes e protótipos de alta fidelidade no Figma",
          "Desenvolvimento de interfaces responsivas utilizando React.js, TypeScript e TailwindCSS."
        ]
      },
      {
        company: "by.agency online",
        period: "out. 2023 - out. 2024",
        position: "Estágiaria de mídias digitais",
        items: [
          "Criação e aprimoramento de interfaces digitais (UI/UX), garantindo usabilidade e alinhamento com a identidade visual.",
          "Aplicação de técnicas de SEO e análise de KPIs para otimização de desempenho.",
          "Desenvolvimento de identidade visual e estratégias de branding para fortalecer a presença digital da marca.",
          "Gerenciamento e planejamento de conteúdo para redes sociais, com foco em engajamento e alcance."
        ]
      }
    ],
    // education data
    educationData: [
      {
        course: "Design de Mídias Digitais",
        period: "jun. 2023 - jun. 2026",
        institution: "Fatec Barueri",
        details: ["Percentual de Rendimento (PR): 9.41/10"]
      },
      {
        course: "Técnico em Química integrado ao Ensino Médio",
        period: "jan. 2020 - jun. 2023",
        institution: "Faculdades Oswaldo Cruz"
      }
    ],
    // skills
    technicalSkillsText: "HTML, CSS, Javascript, Typescript, React.js, Next.js, React Native, Astro, Vite, Wordpress, Dart, Flutter, Tailwind CSS, SQL, Node.js, Git, Visual Studio Code (VSCode), GitHub, Linux, Windows, Pacote Office, Docker, Web APIs, Flexbox, Design Responsivo",
    uxSkillsText: "User Experience (UX), User Interface (UI), UX Research, SEO, Figma, Prototipagem, Wireframing, Wix, Kanban, Scrum, Design Thinking",
    languagesText: "Inglês Fluente, Espanhol Intermediário, Português Nativo",
    softSkillsText: "Adaptabilidade, Aprendizagem rápida, Gerenciamento do tempo, Comunicação, Trabalho em equipe, Pensamento crítico, Proatividade, Criatividade, Curiosidade",
    // certificates
    certificatesData: [
      "Test of English for International Communication (TOEIC)- Pontuação 980/990 (2024)",
      "Lógica de Programação - Udemy",
      "User Experience - FIAP",
      "UI Design - Design de Interface do Usuário- Udemy",
      "SEO Principles: An Essential Guide for Beginners- Semrush Academy [Princípios de SEO: Um Guia Essencial para Iniciantes- Academia Semrush]",
      "NLW Expert - ReactJS, React Native, Node.js - Rocketseat"
    ],
    // projects
    projectsData: [
      {
        title: "Portfólio Pessoal",
        technologies: "Vite, React.js, Tailwind CSS",
        description: "Site pessoal desenvolvido para apresentar projetos, habilidades e experiências de forma responsiva e moderna. Construído com React.js, utilizando Vite para performance e Tailwind CSS para estilização.",
        link: "trizdev.vercel.app"
      },
      {
        title: "FatecLog – Site do Evento",
        technologies: "React.js, JavaScript, Tailwind CSS",
        description: "Desenvolvimento colaborativo do site oficial do evento FatecLog. Projeto com foco em responsividade, acessibilidade e estrutura modular.",
        link: "https://fatec-log.vercel.app/"
      },
      {
        title: "Pixel Art Coloring Book",
        technologies: "Vue.js, JavaScript, Vite, Pinia, Web Workers, CSS, image-q",
        description: "Aplicação que transforma imagens em puzzle de colorir pixel art, com grid em canvas, zoom/pan, validação de cor e exportação em PNG.",
        link: "https://synthriz.github.io/pixel-art-coloring-book/"
      },
      {
        title: "Gerador de CV",
        technologies: "React.js, TypeScript, Tailwind CSS",
        description: "Aplicação web para criar e editar currículos com múltiplos templates, exportação em PDF e foco em compatibilidade ATS.",
        link: "https://cv-generator-nu-ten.vercel.app"
      },
      {
        title: "RPG HTML",
        technologies: "Next.js, React, TypeScript, CSS, Node.js",
        description: "Idle RPG em ASCII para navegador com combate automático, loot procedural, progressão offline, upgrades e salvamento local.",
        link: "https://rpg-html.vercel.app/"
      },
      {
        title: "Astro Landing Page Generator",
        technologies: "Astro, TinaCMS, TypeScript, Faker.js",
        description: "Criação de 4 templates reutilizáveis com conteúdo dinâmico gerado via CMS e faker.js. Capacidade de gerar +1000 variações únicas com foco em performance.",
        link: "https://astro-generator.surge.sh/"
      },
      {
        title: "Happy Valentine's Day",
        technologies: "HTML, CSS, JavaScript",
        description: "Site interativo de Dia dos Namorados onde o botão 'não' foge do mouse e o 'sim' redireciona para um gif de gatinho.",
        link: "https://synthriz.github.io/valentines-day/"
      },
      {
        title: "Expert Notes",
        technologies: "React.js, TypeScript, TailwindCSS, Web Speech API, LocalStorage",
        description: "Aplicação front-end responsiva para criação e gerenciamento de notas (texto e voz), com transcrição automática via Web Speech API (SpeechRecognition), busca em tempo real e persistência de dados com LocalStorage.",
        link: "https://expert-notes-nu.vercel.app/"
      }
    ]
  },
  //constante com os textos para english
  en: {
    saveAsPdf: 'Save as PDF',
    portuguese: 'Português',
    english: 'English',
    experience: 'Experience',
    education: 'Education',
    technicalSkills: 'Technical Skills',
    languages: 'Languages',
    softSkills: 'Soft Skills',
    certificates: 'Certificates',
    projects: 'Projects',
    // Experience data
    experienceData: [
      {
        company: "biz.simplesnologia",
        period: "Jul. 2025 - Present",
        position: "Front-end Developer",
        items: [
          "Development of responsive web interfaces using Next.js, following best practices in JavaScript/TypeScript, React, and UI/UX design to ensure usability and high performance.",
          "Design of wireframes and interactive prototypes in Figma, aligning visual identity and user experience prior to development.",
          "Development of cross-platform mobile applications with React Native, prioritizing accessibility and a consistent user experience across devices.",
          "Integration of RESTful APIs and external services, with a strong focus on scalability, security, and performance.",
          "Collaboration with cross-functional teams using Agile methodologies (Scrum/Kanban), actively participating in code reviews and continuous improvement initiatives.",
          "Use of version control tools (Git/GitHub) and performance monitoring metrics to support continuous product optimization."
        ]
      },
      {
        company: "Sala Maker",
        period: "Feb. 2025 - Jul. 2025",
        position: "Scholarship Monitor - Developer",
        items: [
          "Supervised Internship | Scientific Research",
          "Responsible for creating wireframes and high-fidelity prototypes in Figma",
          "Development of responsive interfaces using React.js, TypeScript and TailwindCSS."
        ]
      },
      {
        company: "by.agency online",
        period: "Oct. 2023 - Oct. 2024",
        position: "Digital Media Intern",
        items: [
          "Creation and improvement of digital interfaces (UI/UX), ensuring usability and alignment with visual identity.",
          "Application of SEO techniques and KPI analysis for performance optimization.",
          "Development of visual identity and branding strategies to strengthen the brand's digital presence.",
          "Management and planning of content for social networks, focusing on engagement and reach."
        ]
      }
    ],
    // Education data
    educationData: [
      {
        course: "Digital Media Design",
        period: "Jun. 2023 - Jun. 2026",
        institution: "Fatec Barueri",
        details: ["Performance Percentage (PR): 9.41/10"]
      },
      {
        course: "Chemistry Technician integrated with High School",
        period: "Jan. 2020 - Jun. 2023",
        institution: "Faculdades Oswaldo Cruz"
      }
    ],
    // Skills
    technicalSkillsText: "HTML, CSS, Javascript, Typescript, React.js, Next.js, React Native, Astro, Vite, Wordpress, Dart, Flutter, Tailwind CSS, SQL, Node.js, Git, Visual Studio Code (VSCode), GitHub, Linux, Windows, Office Suite, Docker, Web APIs, Flexbox, Responsive Design",
    uxSkillsText: "User Experience (UX), User Interface (UI), UX Research, SEO, Figma, Prototyping, Wireframing, Wix, Kanban, Scrum, Design Thinking",
    languagesText: "Fluent English, Intermediate Spanish, Native Portuguese",
    softSkillsText: "Adaptability, Quick Learning, Time Management, Communication, Teamwork, Critical Thinking, Proactivity, Creativity, Curiosity",
    // Certificates
    certificatesData: [
      "Test of English for International Communication (TOEIC) - Score 980/990 (2024)",
      "Programming Logic - Udemy",
      "User Experience - FIAP",
      "UI Design - User Interface Design - Udemy",
      "SEO Principles: An Essential Guide for Beginners - Semrush Academy",
      "NLW Expert - ReactJS, React Native, Node.js - Rocketseat"
    ],
    // Projects
    projectsData: [
      {
        title: "Personal Portfolio",
        technologies: "Vite, React.js, Tailwind CSS",
        description: "Personal website developed to showcase projects, skills and experiences in a responsive and modern way. Built with React.js, using Vite for performance and Tailwind CSS for styling.",
        link: "trizdev.vercel.app"
      },
      {
        title: "FatecLog – Event Website",
        technologies: "React.js, JavaScript, Tailwind CSS",
        description: "Collaborative development of the official FatecLog event website. Project focused on responsiveness, accessibility and modular structure.",
        link: "https://fatec-log.vercel.app/"
      },
      {
        title: "Pixel Art Coloring Book",
        technologies: "Vue.js, JavaScript, Vite, Pinia, Web Workers, CSS, image-q",
        description: "App that transforms uploaded images into a pixel-art coloring puzzle with canvas grid rendering, zoom/pan controls, color validation, and PNG export.",
        link: "https://synthriz.github.io/pixel-art-coloring-book/"
      },
      {
        title: "CV Generator",
        technologies: "React.js, TypeScript, Tailwind CSS",
        description: "Web app to create and edit resumes with multiple templates, PDF export, and an ATS-friendly structure.",
        link: "https://cv-generator-nu-ten.vercel.app"
      },
      {
        title: "RPG HTML",
        technologies: "Next.js, React, TypeScript, CSS, Node.js",
        description: "Browser-based ASCII idle RPG with auto-combat, procedural loot, offline progression, upgrades, and local save support.",
        link: "https://rpg-html.vercel.app/"
      },
      {
        title: "Astro Landing Page Generator",
        technologies: "Astro, TinaCMS, TypeScript, Faker.js",
        description: "Creation of 4 reusable templates with dynamic content generated via CMS and faker.js. Capability to generate +1000 unique variations with focus on performance.",
        link: "https://astro-generator.surge.sh/"
      },
      {
        title: "Happy Valentine's Day",
        technologies: "HTML, CSS, JavaScript",
        description: "Interactive Valentine's Day website where the 'no' button dodges the mouse and 'yes' redirects to a kitten gif.",
        link: "https://synthriz.github.io/valentines-day/"
      },
      {
        title: "Expert Notes",
        technologies: "React.js, TypeScript, TailwindCSS, Web Speech API, LocalStorage",
        description: "Responsive front-end application for creating and managing notes (text and voice), with automatic transcription via Web Speech API (SpeechRecognition), real-time search and data persistence with LocalStorage.",
        link: "https://expert-notes-nu.vercel.app/"
      }
    ]
  }
};

export default translations;
