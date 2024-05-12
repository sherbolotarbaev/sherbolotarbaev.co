'use client';

import { useEffect, useState } from 'react';

import { BiCheck, BiCopy } from 'react-icons/bi';
import scss from '../scss/post.module.scss';

export default function Copy({ content }: { content: string }) {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = () => {
    setCopied(true);
    navigator.clipboard.writeText(content);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copied]);

  return !copied ? (
    <BiCopy className={scss.copy} onClick={copy} />
  ) : (
    <BiCheck className={scss.copy} onClick={copy} />
  );
}
