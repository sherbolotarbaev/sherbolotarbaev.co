'use client';

import { useEffect } from 'react';

import scss from './scss/modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  desc?: string;
  open: boolean;
  setOpen?: (open: boolean) => void;
}

export default function Modal({
  children,
  title,
  desc,
  open,
  setOpen,
}: Readonly<ModalProps>) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('disabled');
    }
    return () => {
      document.body.classList.remove('disabled');
    };
  }, [open]);

  const handleClose = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <>
      <div
        className={open ? `${scss.wrapper} ${scss.active}` : scss.wrapper}
        onClick={handleClose}
      >
        <div className={scss.box} onClick={(e) => e.stopPropagation()}>
          {setOpen && (
            <div className={scss.head}>
              {title && (
                <div className={scss.text}>
                  <h2 className={scss.title}>{title}</h2>

                  {desc && <p className={scss.desc}>{desc}</p>}
                </div>
              )}

              <span className={scss.close} onClick={handleClose}>
                Close
              </span>
            </div>
          )}

          <div className={scss.content}>{children}</div>
        </div>
      </div>
    </>
  );
}
