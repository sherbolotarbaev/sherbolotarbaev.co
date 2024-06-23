'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { useGetMeQuery } from '@/app/redux/api/me';
import { formatDate2 } from '../lib/date';

import Image from 'next/image';
import Button from './button';

import scss from './scss/account.module.scss';

interface AccountProps {
  close?: boolean;
}

export default function Account({ close }: Readonly<AccountProps>) {
  const pathname = usePathname();

  const { data: me, isLoading } = useGetMeQuery();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  const handleOpenAccountMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (close) {
      setIsOpen(false);
    }
  }, [close]);

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
            <div className={scss.items_container}>
              <span className={scss.label}>Display name</span>

              <span className={scss.item}>{me.name}</span>

              <span className={scss.label}>Email</span>

              <span className={scss.item}>{me.email}</span>

              <span className={scss.label}>Joined date</span>

              <span className={scss.item}>{formatDate2(me.createdAt.toString())}</span>
            </div>

            <div className={scss.items_container}>
              <span className={scss.label}>Danger zone</span>

              <Button
                theme="red"
                redirect={`${process.env.NEXT_PUBLIC_API_URL}/logout?next=${pathname}`}
              >
                Log out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
