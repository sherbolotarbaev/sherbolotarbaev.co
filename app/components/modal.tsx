'use client';

import { useEffect } from 'react';

import { BiX } from 'react-icons/bi';
import scss from './scss/modal.module.scss';

interface Props {
  children: React.ReactNode;
  title?: string;
  desc?: string;
  open: boolean;
  handleOpen?: () => void;
}

export default function Modal({
  children,
  title,
  desc,
  open,
  handleOpen,
}: Readonly<Props>) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('disabled');
    }

    return () => {
      document.body.classList.remove('disabled');
    };
  }, [open]);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={open ? `${scss.wrapper} ${scss.active}` : scss.wrapper}
        onClick={handleOpen}
      >
        <div className={scss.box} onClick={handleContentClick}>
          <div className={scss.head}>
            {title && (
              <div className={scss.text}>
                <h2 className={scss.title}>{title}</h2>

                {desc && <p className={scss.desc}>{desc}</p>}
              </div>
            )}

            {handleOpen && <BiX className={scss.close} onClick={handleOpen} />}
          </div>

          <div className={scss.content}>{children}</div>
        </div>
      </div>
    </>
  );
}
