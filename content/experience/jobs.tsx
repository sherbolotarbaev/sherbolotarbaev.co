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
    description: `
    At WEDEVX, I collaborate with teams to develop robust backend solutions using technologies like <span>NestJS</span>, <span>Fastify</span>, <span>Node.js v20</span>, and <span>PostgreSQL</span>. I play a key role in integrating essential services such as <span>AWS Lambda</span> and <span>AWS IAM</span>. <br /> <br />
    
    One of my major accomplishments has been implementing quizzes on the platform, which generated over <span>800 leads</span> for free trials and ensured these leads were saved to the <span>CRM</span>. Through my optimization efforts, I achieved a <span>38%</span> improvement in our codebase <span>performance</span>. <br /> <br />
    
    I also work on <span>Soft Skills AI</span>, incorporating advanced AI features like speech-to-text, image recognition, and AWS S3 integration. Additionally, I'm enhancing our <span>DevXAI</span> feature, designed to help our students with debugging and assisting with exercises.`,
    url: 'https://www.wedevx.co/',
  },
  {
    name: 'Mancho Devs',
    date: '2021 - 2023',
    role: 'Frontend Developer',
    description:
      'Developed adaptive and cross-platform websites using <span>React</span>, <span>Next.js</span>, <span>Redux</span>, <span>SCSS</span>, and <span>TypeScript</span>. <br /> <br /> Led the implementation of optimization strategies resulting in notable improvements in website <span>speed</span> and <span>performance</span>. <br /> <br /> Utilized advanced <span>caching</span> techniques to enhance user experience and page load times.',
    url: 'https://www.mancho.dev/',
  },
];
