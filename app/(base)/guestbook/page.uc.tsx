'use client';

import { useCallback, useEffect, useState } from 'react';

import type { User } from 'next-auth';

import { useGetGuestbookMessagesQuery } from '@/app/redux/api/guestbook';
import { formatDate } from '@/app/lib/date';

import Image from 'next/image';
import Form from './components/form';
import { SignInButtons, SignOutButton } from '@/content/guestbook/buttons';
import Modal from '@/app/components/modal';
import Button from '@/app/components/button';

import { BiChevronDown } from 'react-icons/bi';
import scss from '@/app/components/scss/guestbook.module.scss';

interface Props {
  user?: User;
}

function LoadingMessages({ count }: { count: number }) {
  return (
    <div className={`${scss.messages} ${scss.load}`}>
      {count > 0 &&
        Array.from({ length: count }).map((_, index) => (
          <div key={index} className={scss.message}>
            <div className={scss.logo_wrapper}></div>

            <div className={scss.info}>
              <span className={scss.name}></span>

              <span className={scss.text}></span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default function GuestbookClient({ user }: Readonly<Props>) {
  const [take, setTake] = useState<number>(7);

  const { data, isLoading, refetch, isFetching } = useGetGuestbookMessagesQuery({ take });

  const handleLoadMore = useCallback(() => {
    setTake((prevTake) => prevTake + 3);
    refetch();
  }, [setTake, refetch]);

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!user) {
      handleOpen();
    }
  }, [user]);

  return (
    <>
      {open && (
        <Modal open={open} handleOpen={handleOpen} title="Sign in" desc="to your account">
          <SignInButtons />
        </Modal>
      )}

      <section className={scss.wrapper}>
        <div className={scss.container}>
          <div className={scss.text}>
            <h2 className={scss.title}>
              Guestbook ({(data && !isLoading && data.count) || 0})
            </h2>
          </div>

          {user ? (
            <>
              <Form user={user} />

              <SignOutButton />
            </>
          ) : (
            <Button width={150} onClick={handleOpen}>
              Sign in
            </Button>
          )}

          {data && !isLoading ? (
            <div className={scss.messages}>
              {data.messages.map(({ message, image, name, createdAt }, index) => (
                <div key={index} className={scss.message}>
                  {image && (
                    <div className={scss.logo_wrapper}>
                      <Image
                        className={scss.logo}
                        width={30}
                        height={30}
                        src={image}
                        alt={name || 'User'}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className={scss.info}>
                    <span className={scss.name}>
                      {name.split(' ')[0]}
                      <span className={scss.created_at}>• {formatDate(createdAt)}</span>
                    </span>

                    {message}
                  </div>
                </div>
              ))}

              {isFetching && <LoadingMessages count={3} />}

              {data.count !== data.totalCount && (
                <span className={scss.load_more} onClick={handleLoadMore}>
                  Load more <BiChevronDown size={18} />
                </span>
              )}
            </div>
          ) : (
            <LoadingMessages count={7} />
          )}
        </div>
      </section>
    </>
  );
}
