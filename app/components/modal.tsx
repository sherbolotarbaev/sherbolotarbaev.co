'use client';

import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { isMobile } from 'react-device-detect';

import scss from './scss/modal.module.scss';

interface Props {
  children: React.ReactNode;
  title?: string;
  desc?: string;
  open: boolean;
  setOpen?: (open: boolean) => void;
}

export default function Modal({ children, title, desc, open, setOpen }: Readonly<Props>) {
  const [{ y }, set] = useSpring(() => ({
    y: 0,
    config: { tension: 300, friction: 30 },
  }));

  const bind = useDrag(
    ({ last, movement: [, my], memo = y.get() }) => {
      if (my < -5) return memo;

      if (my > 300 && last) {
        handleClose();
        set({ y: window.innerHeight });
      } else if (last) {
        set({ y: my < 300 ? 0 : my });
      } else {
        set({ y: my, immediate: true });
      }

      return memo;
    },
    {
      initial: () => [0, y.get()],
      bounds: { top: 0 },
      rubberband: true,
      filterTaps: true,
    },
  );

  useEffect(() => {
    if (open) {
      set({ y: 0 });
      document.body.classList.add('disabled');
    } else {
      set({ y: window.innerHeight });
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
        <animated.div
          {...(isMobile && setOpen ? bind() : {})}
          className={scss.box}
          onClick={(e) => e.stopPropagation()}
          style={{
            y,
          }}
        >
          <div className={!setOpen ? scss.head : `${scss.head} ${scss.pt}`}>
            {setOpen && <span className={scss.indicator}></span>}

            {title && (
              <div className={scss.text}>
                <h2 className={scss.title}>{title}</h2>

                {desc && <p className={scss.desc}>{desc}</p>}
              </div>
            )}

            {setOpen && (
              <span className={scss.close} onClick={handleClose}>
                Close
              </span>
            )}
          </div>

          <div className={scss.content}>{children}</div>
        </animated.div>
      </div>
    </>
  );
}
