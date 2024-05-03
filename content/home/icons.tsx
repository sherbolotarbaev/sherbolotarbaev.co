import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoInstagram,
} from 'react-icons/bi';

type Icon = {
  svg: React.ReactElement;
  url: string;
};

export const icons: Icon[] = [
  {
    svg: <BiLogoLinkedin size={20} />,
    url: 'https://www.linkedin.com/in/sherbolotarbaev',
  },
  {
    svg: <BiLogoGithub size={20} />,
    url: 'https://github.com/sherbolotarbaev',
  },
  {
    svg: <BiLogoTwitter size={20} />,
    url: 'https://twitter.com/sherbolotarbaev',
  },
  {
    svg: <BiLogoInstagram size={20} />,
    url: 'https://www.instagram.com/sherbolotarbaev',
  },
];
