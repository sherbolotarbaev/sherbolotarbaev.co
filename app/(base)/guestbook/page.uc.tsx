'use client';

import { useEffect, useState } from 'react';

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

export default function GuestbookClient({ user }: Readonly<Props>) {
  const [take, setTake] = useState<number>(7);

  const { data, isLoading, refetch, isFetching } = useGetGuestbookMessagesQuery({ take });

  const handleLoadMore = () => {
    setTake((prevTake) => prevTake + 3);
    refetch();
  };

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
        <Modal open={open} handleOpen={handleOpen} title="Sign in">
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

          <div className={isLoading ? `${scss.messages} ${scss.load}` : scss.messages}>
            {data && (
              <>
                {data.messages.map(({ message, image, name, createdAt }, index) => (
                  <div key={index} className={scss.message}>
                    {image && (
                      <Image
                        className={scss.logo}
                        width={30}
                        height={30}
                        src={image}
                        alt={name || 'User'}
                        loading={'lazy'}
                      />
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

                {isFetching && !isLoading && (
                  <div className={`${scss.messages} ${scss.load}`}></div>
                )}

                {data.count !== data.totalCount && (
                  <span className={scss.load_more} onClick={handleLoadMore}>
                    Load more <BiChevronDown size={18} />
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
