'use client';

import scss from './scss/loader.module.scss';

export default function Loader() {
  return (
    <>
      <div className={scss.wrapper}>
        <span className={scss.loader}></span>
      </div>
    </>
  );
}
