'use client';

import { siteConfig } from '@/config/site';

import Image from 'next/image';

import Button from '@/app/components/button';
import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';

import { icons } from '@/content/home/icons';
import sher from '@/public/images/sherbolot.webp';
import scss from '@/app/components/scss/page.module.scss';

export default function HomeClient() {
  return (
    <>
      <section className={scss.wrapper}>
        <div className={scss.container}>
          <div className={scss.logo_wrapper}>
            <Image
              className={scss.logo}
              width={500}
              height={500}
              src={sher}
              alt={siteConfig.name}
              loading={'lazy'}
            />
          </div>

          <div className={scss.text}>
            <h2 className={scss.title}>{"hey, I'm Sher 👋"}</h2>

            <p className={scss.desc}>
              {
                "I'm a software engineer from Kyrgyzstan 🇰🇬. I'm fascinated by large-scale, high-impact products and contributed to major feature launches in industry-leading services."
              }
            </p>
          </div>

          {icons.length && (
            <div className={scss.icons}>
              {icons.map((icon, index) => (
                <Button key={index} width={40} open={icon.url}>
                  {icon.svg}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className={scss.container}>
          <Skills />
        </div>

        <div className={scss.container}>
          <Experience />
        </div>

        <div className={scss.container}>
          <Contact />
        </div>
      </section>
    </>
  );
}
