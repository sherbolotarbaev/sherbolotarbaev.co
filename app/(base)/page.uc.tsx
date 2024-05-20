'use client';

import { siteConfig } from '@/config/site';
import type { Post } from '@/app/lib/blog';

import Image from 'next/image';

import Button from '@/app/components/button';
import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';
import Posts from './components/posts';

import sher from '@/public/images/sherbolot.webp';
import scss from '@/app/components/scss/page.module.scss';

interface Props {
  posts: Post[];
}

export default function HomeClient({ posts }: Readonly<Props>) {
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
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nAEnANj/ANTe4JSQkOvl21diZQC/rqNwZmvItraVn6kAAAwYdpqq8O/z8/j3vaUXBBJEHV0AAAAASUVORK5CYII="
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

          <Button width={150} open="/cv/sherbolot_arbaev.pdf" gradient>
            Download CV
          </Button>
        </div>

        <div className={scss.container}>
          <Skills />
        </div>

        <div className={scss.container}>
          <Experience />
        </div>

        <div className={scss.container}>
          <Posts posts={posts} />
        </div>

        <div className={scss.container}>
          <Contact />
        </div>
      </section>
    </>
  );
}
