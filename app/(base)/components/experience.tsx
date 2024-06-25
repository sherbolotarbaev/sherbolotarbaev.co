'use client';

import Link from 'next/link';

import { jobs } from '@/content/experience/jobs';
import { BiLink } from 'react-icons/bi';
import scss from './scss/experience.module.scss';

export default function Experience() {
  return (
    <>
      <div className={scss.wrapper} id="experience">
        <h2 className={scss.title}>My experience 🧠</h2>

        {jobs.length && (
          <div className={scss.jobs}>
            {jobs.map((job, idx) => (
              <div key={idx} className={scss.job}>
                <div className={scss.head}>
                  <span className={scss.role}>{job.name}</span>

                  <span className={scss.date}>{job.date}</span>
                </div>

                <span className={scss.name}>{job.role} • Full-time</span>

                <p
                  className={scss.desc}
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />

                <Link className={scss.link} href={job.url} target="_blank">
                  <BiLink size={19} /> {job.url}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
