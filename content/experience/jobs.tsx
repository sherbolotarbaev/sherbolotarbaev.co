type Job = {
  name: string;
  date: string;
  role: string;
  description: string;
  url: string;
};

export const jobs: Job[] = [
  {
    name: 'WEDEVX',
    date: '2023 - Present',
    role: 'Software Development Engineer',
    description: `I collaborate with teams to develop robust backend solutions, leveraging technologies such as <span>Nest JS</span>, <span>Fastify</span>, <span>Node.js v20</span>, and <span>PostgreSQL</span>. A significant contribution I'm making is to the creation of <span>Soft Skills AI</span>, an innovative project that incorporates advanced AI functionalities like <span>speech-to-text</span>, <span>image recognition</span>, and <span>AWS S3</span> integration. I'm also working on optimizing our <span>DevXAI</span> feature, which not only analyzes code but also aids in debugging. Through my efforts, I'm improving backend systems, resulting in enhanced server response time and overall application performance. Furthermore, I conduct code reviews and provide mentorship to junior developers, enabling effective management and resolution of backend issues.`,
    url: 'https://www.wedevx.co/',
  },
  {
    name: 'Mancho Devs',
    date: '2021 - 2023',
    role: 'Frontend Developer',
    description:
      'I led the development of a <span>React-based</span> web app from scratch, utilizing <span>Next.js</span>, <span>Redux</span>, <span>SCSS</span>, and <span>TypeScript</span>. My optimizations significantly improved website <span>speed</span> and <span>performance</span> through code enhancements and caching techniques.',
    url: 'https://www.mancho.dev/',
  },
];
