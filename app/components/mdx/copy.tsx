'use client';

import { useEffect, useState } from 'react';

import { toast } from 'sonner';

import { BiCheck, BiCopy } from 'react-icons/bi';
import scss from '../scss/post.module.scss';

interface CopyProps {
  content: string;
}

export default function Copy({ content }: Readonly<CopyProps>) {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = () => {
    setCopied(true);
    navigator.clipboard.writeText(content);
    toast.success('Copied to clipboard!', {
      duration: 4500,
      position: 'top-right',
    });
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
