'use client';

import scss from './scss/footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={scss.footer}>
        <div className={scss.text}>
          Built and designed by Sherbolot Arbaev. <br /> All rights reserved. ©
        </div>
      </div>
    </>
  );
}
