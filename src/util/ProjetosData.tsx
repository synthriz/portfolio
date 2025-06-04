export function getProjetos(language: "pt" | "en") {
  return [
  {
    imagem: "/static/fateclog.png",
    nome: language === "pt" ? "FatecLog" : "FatecLog",
    descricao:
      language === "pt"
        ? "Participei da criação do novo site do FatecLog, evento anual de logística das Fatecs, como parte de uma disciplina da faculdade. O site oferece informações sobre o evento, programação, palestrantes e inscrição, com um design moderno e responsivo"
        : "I contributed to the creation of the new FatecLog website, an annual logistics event held by the Fatecs, as part of a college course. The site provides information about the event, schedule, speakers, and registration, with a modern and responsive design.",
    tecnologias: ["react.js", "javascript", "tailwind css"],
    githubLink: "https://github.com/GustavoAbranches/fatec-log",
    deployLink: "https://fatec-log.vercel.app/",
  },
  {
    imagem: "static/bdescola.png",
    nome: language === "pt" ? "Banco de Dados - Escola" : "Database - School",
    descricao:
      language === "pt"
        ? "O projeto Banco de Dados - Escola implementa um sistema relacional para gerenciar Estudantes, Professores, Disciplinas, Turmas e Matrículas. Utiliza SQL para manipulação de dados e DBML para modelagem visual, seguindo a Primeira Forma Normal (1FN)."
        : "The Database - School project implements a relational system to manage Students, Teachers, Subjects, Classes, and Enrollments. It uses SQL for data manipulation and DBML for visual modeling, following the First Normal Form (1NF).",
    tecnologias: ["SQL"],
    githubLink: "https://github.com/synthriz/bd-escola",
  },
  {
    imagem: "static/valentinesday.png",
    nome: language === "pt" ? "Happy Valentine's Day" : "Happy Valentine's Day",
    descricao:
      language === "pt"
        ? "Um site interativo de Dia dos Namorados onde o botão `não` foge do mouse. Ao clicar em `sim`, o usuário é redirecionado para um gif de gatinho. Feito com HTML, CSS e Javascript."
        : "An interactive Valentine's Day site where the `no` button runs from the mouse. When clicking `yes`, the user is redirected to a cat gif. Made with HTML, CSS, and JavaScript.",
    tecnologias: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/synthriz/valentines-day",
    deployLink: "https://synthriz.github.io/valentines-day/",
  },
  {
    imagem: "static/expertnotes.png",
    nome: language === "pt" ? "Expert Notes" : "Expert Notes",
    descricao:
      language === "pt"
        ? "Expert Notes é uma aplicação front-end responsiva que permite criar e gerenciar notas de forma simples, incluindo notas de áudio transcritas pela API SpeechRecognition. Oferece funcionalidades como busca, gravação, e persistência de dados com LocalStorage para evitar a perda de informações."
        : "Expert Notes is a responsive front-end application that allows users to create and manage notes easily, including audio notes transcribed using the SpeechRecognition API. It offers features such as search, recording, and data persistence via LocalStorage to prevent data loss.",
    tecnologias: ["react.js", "typescript", "tailwind css"],
    githubLink: "https://github.com/synthriz/expert-notes",
    deployLink: "https://expert-notes-nu.vercel.app/",
  },
  {
    imagem: "static/spotifyclone.png",
    nome: language === "pt" ? "Spotify Clone" : "Spotify Clone",
    descricao:
      language === "pt"
        ? "Este projeto recria a página inicial do Spotify, usando HTML para a estrutura, CSS para estilização com CSS Grid, Flexbox e media queries, e JavaScript para manipulação do DOM e interatividade. A aplicação inclui uma API local para simular a busca e exibição de informações, mas a funcionalidade de busca não está disponível fora do ambiente de desenvolvimento devido a limitações no deploy."
        : "This project recreates Spotify's homepage using HTML for structure, CSS with Grid, Flexbox and media queries for styling, and JavaScript for DOM manipulation and interactivity. It includes a local API to simulate search and display data, but the search feature is unavailable outside the development environment due to deployment limitations.",
    tecnologias: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/synthriz/spotify-clone",
    deployLink: "https://synthriz.github.io/spotify-clone/",
  },
  {
    imagem: "static/expertpolls.png",
    nome: language === "pt" ? "Expert Polls" : "Expert Polls",
    descricao:
      language === "pt"
        ? "O projeto Expert Polls permite aos usuários criar enquetes, votar e acompanhar os resultados em tempo real. Utiliza Node.js para o backend, com dados armazenados no PostgreSQL e manipulados pelo Prisma ORM. O Redis é usado para gerenciar os votos de forma eficiente, e os resultados são atualizados em tempo real via WebSockets."
        : "The Expert Polls project allows users to create polls, vote, and track results in real time. It uses Node.js for the backend, with data stored in PostgreSQL and handled via Prisma ORM. Redis manages votes efficiently, and results are updated in real time through WebSockets.",
    tecnologias: ["node.js", "redis", "sql", "prisma"],
    githubLink: "https://github.com/synthriz/expert-polls",
  },
  {
    imagem: "static/astrodypg.png",
    nome: language === "pt" ? "Astro Landing Page Generator" : "Astro Landing Page Generator",
    descricao:
      language === "pt"
        ? "Criação de 4 templates reutilizáveis com conteúdo dinâmico gerado via CMS e faker.js. Capacidade de gerar +1000 variações únicas com foco em performance."
        : "Creation of 4 reusable templates with dynamic content generated via CMS and faker.js. Capable of generating 1000+ unique variations with a focus on performance.",
    tecnologias: ["Astro", "TinaCMS", "Tailwindcss", "javascript"],
    githubLink: "https://github.com/synthriz/astro-landing-page-generator",
    deployLink: "https://astro-generator.surge.sh/",
  },
];
}