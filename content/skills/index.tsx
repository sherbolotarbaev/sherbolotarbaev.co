import {
  BiLogoAws,
  BiLogoDocker,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { SiExpress, SiFastify, SiNestjs, SiNextdotjs, SiPrisma } from 'react-icons/si';

type Skill = {
  name: string;
  svg?: React.ReactElement;
};

export const skills: Skill[] = [
  {
    name: 'JavaScript',
    svg: <BiLogoJavascript size={20} />,
  },
  {
    name: 'TypeScript',
    svg: <BiLogoTypescript size={20} />,
  },
  {
    name: 'Node.js',
    svg: <BiLogoNodejs size={20} />,
  },
  {
    name: 'Nest.js',
    svg: <SiNestjs size={20} />,
  },
  {
    name: 'Fastify',
    svg: <SiFastify size={20} />,
  },
  {
    name: 'Express',
    svg: <SiExpress size={20} />,
  },
  {
    name: 'PostgreSQL',
    svg: <BiLogoPostgresql size={20} />,
  },
  {
    name: 'AWS',
    svg: <BiLogoAws size={20} />,
  },
  {
    name: 'Docker',
    svg: <BiLogoDocker size={20} />,
  },
  {
    name: 'Git',
    svg: <BiLogoGit size={20} />,
  },
  {
    name: 'Prisma',
    svg: <SiPrisma size={20} />,
  },
  {
    name: 'React',
    svg: <BiLogoReact size={20} />,
  },
  {
    name: 'Redux',
    svg: <BiLogoRedux size={20} />,
  },
  {
    name: 'Next.js',
    svg: <SiNextdotjs size={20} />,
  },
  {
    name: 'Sass',
    svg: <BiLogoSass size={20} />,
  },
  {
    name: 'Tailwind',
    svg: <BiLogoTailwindCss size={20} />,
  },
];
