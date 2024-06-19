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
    - Developed robust backend solutions using NestJS, Fastify, Node.js v20, and PostgreSQL.
    - Integrated essential services such as AWS Lambda and AWS IAM.
    - Implemented quizzes that generated 800+ leads, enhancing CRM data.
    - Achieved a 38% performance improvement in the codebase through optimization efforts.
    - Incorporated advanced AI features like speech-to-text, image recognition, and AWS S3 integration for Soft Skills AI.
    - Enhanced the DevXAI feature to assist students with debugging and exercises.
    - Designed and implemented microservices architecture using NestJS microservices and Kafka.js to ensure scalable and maintainable systems.
    - Leveraged Large Language Models (LLM) to improve AI-driven features and user interactions.
    - Conducted code reviews to ensure best practices and maintain high code quality.
    - Utilized AWS and Google Cloud for deploying and managing cloud infrastructure, enhancing application scalability and reliability.
    - Employed Docker for containerization, streamlining development workflows and ensuring consistency across environments.`,
    url: 'https://www.wedevx.co/',
  },
  {
    name: 'Mancho Devs',
    date: '2021 - 2023',
    role: 'Frontend Developer',
    description:`
    - Developed adaptive and cross-platform websites using React, Next.js, Redux, SCSS, and TypeScript.
    - Led optimization strategies, significantly improving website speed and performance.
    - Utilized advanced caching techniques to enhance user experience and page load times.
    - Conducted thorough code reviews to maintain code quality and foster team learning.`,
    url: 'https://www.mancho.dev/',
  },
];
