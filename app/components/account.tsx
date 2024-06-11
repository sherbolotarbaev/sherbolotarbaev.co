'use client';

import { useEffect, useRef, useState } from 'react';

import { useGetMeQuery } from '@/app/redux/api/me';

import Image from 'next/image';
import Button from './button';

import scss from './scss/account.module.scss';

export default function Account() {
  const { data: me, isLoading } = useGetMeQuery();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  const handleOpenAccountMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return me && !isLoading ? (
    <>
      <div
        className={isOpen ? `${scss.wrapper} ${scss.active}` : scss.wrapper}
        onClick={(e) => e.stopPropagation()}
        ref={accountMenuRef}
      >
        <div className={scss.user} onClick={handleOpenAccountMenu}>
          <div className={scss.photo_wrapper}>
            <Image
              src={me?.photo || 'https://cdn-icons-png.freepik.com/512/552/552721.png'}
              alt={`${me.name} ${me.surname}`}
              className={scss.photo}
              width={250}
              height={250}
              loading="lazy"
            />
          </div>
        </div>

        <div className={scss.menu}>
          <div className={scss.list}>
            <div className={scss.item_container}>
              <span className={scss.label}>Full name</span>

              <span className={scss.item}>
                {me.name} {me.surname}
              </span>
            </div>

            <div className={scss.item_container}>
              <span className={scss.label}>Email</span>

              <span className={scss.item}>{me.email}</span>
            </div>

            {/* {me.metaData && (
              <div className={scss.item_container}>
                <span className={scss.label}>Location</span>

                <span className={scss.item}>
                  {me.metaData.city}, {me.metaData.country}
                </span>
              </div>
            )} */}

            <div className={scss.item_container}>
              <span className={scss.label}>Danger zone</span>

              <Button theme="red" redirect={`${process.env.NEXT_PUBLIC_API_URL}/logout`}>
                Log out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : isLoading ? (
    <>
      <div className={`${scss.wrapper} ${scss.load}`}>
        <div className={scss.user}>
          <div className={scss.photo_wrapper}></div>
        </div>
      </div>
    </>
  ) : null;
}
