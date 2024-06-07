'use client';

import { useState, useCallback } from 'react';

import { useGetGuestbookMessagesQuery } from '@/app/redux/api/guestbook';
import { formatDate } from '@/app/lib/date';

import Image from 'next/image';
import Form from './components/form';
import Button from '@/app/components/button';

import { BiChevronDown, BiErrorCircle } from 'react-icons/bi';
import scss from '@/app/components/scss/guestbook.module.scss';

interface GuestbookClientProps {
  user?: User;
}

export default function GuestbookClient({ user }: Readonly<GuestbookClientProps>) {
  const [take, setTake] = useState<number>(40);

  const { data, isLoading, refetch, isFetching, isError } = useGetGuestbookMessagesQuery({
    take,
  });

  const handleLoadMore = useCallback(() => {
    setTake((prevTake) => prevTake + 10);
    refetch();
  }, [setTake, refetch]);

  return (
    <>
      <section className={scss.wrapper}>
        <div className={scss.container}>
          <div className={scss.text}>
            <h2 className={scss.title}>
              Guestbook ({(data && !isLoading && data.count) || 0})
            </h2>

            {!user && (
              <p className={scss.desc}>
                Share your feedback, questions, collaborations, or just say hi. I am eager
                to hear from you. Sign in to leave your message!
              </p>
            )}
          </div>

          {user ? (
            <Form user={user} />
          ) : (
            <Button width={150} redirect="/sign-in">
              Sign in
            </Button>
          )}

          {data && !isLoading && !isError ? (
            <div className={scss.messages}>
              {data.items.map(({ message, image, name, createdAt }, index) => (
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
                      <span className={scss.created_at}>{formatDate(createdAt)}</span>
                    </span>

                    {message}
                  </div>
                </div>
              ))}

              {isFetching && <LoadingMessages count={10} />}

              {data.count !== data.totalCount && (
                <span className={scss.load_more} onClick={handleLoadMore}>
                  Load more <BiChevronDown size={18} />
                </span>
              )}
            </div>
          ) : isError ? (
            <span className={scss.error_message}>
              <BiErrorCircle className={scss.icon} size={20} />
              Oh no 🥲, something went wrong... maybe refresh?
            </span>
          ) : (
            <LoadingMessages count={7} />
          )}
        </div>
      </section>
    </>
  );
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
