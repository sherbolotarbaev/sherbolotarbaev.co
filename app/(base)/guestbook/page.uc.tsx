'use client';

import { useState, useCallback, useMemo } from 'react';

import { useGetGuestbookMessagesQuery } from '@/app/redux/api/guestbook';
import { formatDate } from '@/app/lib/date';

import Image from 'next/image';
import Form from './components/form';
import DeleteButton from './components/delete.button';
import Button from '@/app/components/button';
import Modal from '@/app/components/modal';

import { MdVerified } from 'react-icons/md';
import { BiChevronDown, BiErrorCircle, BiTrash } from 'react-icons/bi';
import scss from '@/app/components/scss/guestbook.module.scss';

interface GuestbookClientProps {
  user?: User;
}

export default function GuestbookClient({ user }: Readonly<GuestbookClientProps>) {
  const [open, setOpen] = useState<boolean>(false);
  const [action, setAction] = useState<Action | null>(null);

  const [take, setTake] = useState<number>(25);

  const { data, isLoading, refetch, isFetching, isError } = useGetGuestbookMessagesQuery({
    take,
  });

  const handleAction = useCallback((a: Action) => {
    setAction(a);
    setOpen(true);
  }, []);

  const handleLoadMore = useCallback(() => {
    setTake(
      (prevTake) => prevTake + (data ? Math.min(5, data.totalCount - data.count) : 5),
    );
    refetch();
  }, [refetch]);

  const messages = useMemo(() => {
    if (!data || isLoading || isError || isFetching) return null;
    return data.items.map(({ id, message, createdAt, author }, index) => (
      <div key={index} className={scss.message}>
        {author.photo && (
          <div className={scss.logo_wrapper}>
            <Image
              className={scss.logo}
              width={30}
              height={30}
              src={author.photo}
              alt={author.name || 'User'}
              loading="lazy"
            />
          </div>
        )}

        <div className={scss.info}>
          <span className={scss.name}>
            {author.name}

            {author.isVerified && <MdVerified color="var(--color-code-markup-heading)" />}

            <span className={scss.created_at}>{formatDate(createdAt)}</span>
          </span>

          {message}
        </div>

        {user && author.email === user.email && (
          <div className={scss.controls}>
            <Button
              small
              style={{
                opacity: '0.75',
              }}
              theme="red"
              onClick={() =>
                handleAction({
                  name: 'Delete',
                  title: 'Confirm Action',
                  desc: `Are you sure you want to delete this message? This action cannot be undone.`,
                  body: (
                    <DeleteButton
                      messageId={id}
                      setAction={setAction}
                      setOpen={setOpen}
                    />
                  ),
                })
              }
            >
              <BiTrash /> Delete
            </Button>
          </div>
        )}
      </div>
    ));
  }, [data, isLoading, isError, user, handleAction]);

  return (
    <>
      {action && user && (
        <Modal open={open} setOpen={setOpen} title={action.title} desc={action.desc}>
          {action.body}
        </Modal>
      )}

      <section className={scss.wrapper}>
        <div className={scss.container}>
          <div className={scss.text}>
            <h2 className={scss.title}>
              Guestbook ({(data && !isLoading && data.totalCount) || 0})
            </h2>

            {!user && (
              <p className={scss.desc}>
                Share your feedback, questions, collaborations, or just say hi. I am eager
                to hear from you. Sign in to leave your message!
              </p>
            )}
          </div>

          {user ? (
            <Form />
          ) : (
            <Button width={150} redirect="/sign-in">
              Sign in
            </Button>
          )}

          {isLoading && <LoadingMessages count={7} />}

          {isError && (
            <span className={scss.error_message}>
              <BiErrorCircle className={scss.icon} size={19} />
              Oh no 🥲, something went wrong... maybe refresh?
            </span>
          )}

          {messages && (
            <div className={scss.messages}>
              {messages}
              {isFetching && (
                <LoadingMessages
                  count={data ? Math.min(5, data.totalCount - data.count) : 5}
                />
              )}
              {data && data.count !== data.totalCount && !isFetching && (
                <span className={scss.load_more} onClick={handleLoadMore}>
                  Load more <BiChevronDown size={18} />
                </span>
              )}
            </div>
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
