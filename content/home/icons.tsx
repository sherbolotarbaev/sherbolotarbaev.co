import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoInstagram,
} from 'react-icons/bi';

type Icon = {
  svg: React.ReactElement;
  url: string;
  name: string;
};

export const icons: Icon[] = [
  {
    name: 'LinkedIn',
    svg: <BiLogoLinkedin size={20} />,
    url: 'https://www.linkedin.com/in/sherbolotarbaev',
  },
  {
    name: 'GitHub',
    svg: <BiLogoGithub size={20} />,
    url: 'https://github.com/sherbolotarbaev',
  },
  {
    name: 'Twitter',
    svg: <BiLogoTwitter size={20} />,
    url: 'https://twitter.com/sherbolotarbaev',
  },
  {
    name: 'Instagram',
    svg: <BiLogoInstagram size={20} />,
    url: 'https://www.instagram.com/sherbolotarbaev',
  },
];
