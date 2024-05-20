'use client';

import scss from '@/app/components/scss/projects.module.scss';

export default function ProjectsClient() {
  return (
    <>
      <section className={scss.wrapper}>
        <div className={scss.container}>
          <div className={scss.text}>
            <h2 className={scss.title}>Projects</h2>

            <p className={scss.desc}>Soon...</p>
          </div>
        </div>
      </section>
    </>
  );
}
