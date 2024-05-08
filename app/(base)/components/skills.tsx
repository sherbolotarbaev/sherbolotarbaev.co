'use client';

import { skills } from '@/content/skills';
import scss from './scss/skills.module.scss';

export default function Skills() {
  return (
    <>
      <div className={scss.wrapper} id="skills">
        <div className={scss.container}>
          <h2 className={scss.title}>Tech Skills</h2>

          {skills.length && (
            <div className={scss.skills}>
              {skills.map((skill, index) => (
                <div key={index} className={scss.skill}>
                  {skill.svg} {skill.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
