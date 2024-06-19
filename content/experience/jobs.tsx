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
    - Developed robust backend solutions using <span>NestJS</span>, <span>Fastify</span>, <span>Node.js v20</span>, and <span>PostgreSQL</span>. <br/>
    - Integrated essential services such as <span>AWS Lambda</span> and <span>AWS IAM</span>.
    - Implemented quizzes that generated <span>800+</span> leads, enhancing <span>CRM</span> data.
    - Achieved a <span>38%</span> performance improvement in the codebase through optimization efforts. <br/>
    - Incorporated advanced AI features like <span>speech-to-text</span>, <span>image recognition</span>, and <span>AWS S3</span> integration for Soft Skills AI. <br/>
    - Enhanced the <span>DevXAI</span> feature to assist students with debugging and exercises. <br/>
    - Designed and implemented microservices architecture using <span>NestJS microservices</span> and <span>Kafka.js</span> to ensure scalable and maintainable systems. <br/>
    - Leveraged <span>Large Language Models (LLM)</span> to improve <span>AI-driven</span> features and user interactions. <br/>
    - Conducted code reviews to ensure best practices and maintain high <span>code quality</span>. <br/>
    - Utilized <span>AWS</span> and <span>Google Cloud</span> for deploying and managing cloud infrastructure, enhancing application scalability and reliability. <br/>
    - Employed <span>Docker</span> for containerization, streamlining development workflows and ensuring consistency across environments.`,
    url: 'https://www.wedevx.co/',
  },
  {
    name: 'Mancho Devs',
    date: '2021 - 2023',
    role: 'Frontend Developer',
    description: `
    - Developed adaptive and <span>cross-platform</span> websites using <span>React</span>, <span>Next.js</span>, <span>Redux</span>, <span>SCSS</span>, and <span>TypeScript</span>. <br/>
    - Led optimization strategies, significantly improving website <span>speed</span> and <span>performance</span>. <br/>
    - Utilized advanced <span>caching</span> techniques to enhance user experience and page <span>load times</span>. <br/>
    - Conducted thorough <span>code reviews</span> to maintain code quality and foster team learning.`,
    url: 'https://www.mancho.dev/',
  },
];
