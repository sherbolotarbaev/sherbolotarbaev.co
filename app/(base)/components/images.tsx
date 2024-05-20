'use client';

import photo from '@/public/images/sherbolot.webp';
import Image from 'next/image';
import scss from './scss/images.module.scss';

const images = [
  {
    src: photo,
    alt: 'Sherbolot Arbaev',
  },
  {
    src: photo,
    alt: 'Sherbolot Arbaev',
  },
  {
    src: photo,
    alt: 'Sherbolot Arbaev',
  },
  {
    src: photo,
    alt: 'Sherbolot Arbaev',
  },
  {
    src: photo,
    alt: 'Sherbolot Arbaev',
  },
  {
    src: photo,
    alt: 'Sherbolot Arbaev',
  },
  {
    src: photo,
    alt: 'Sherbolot Arbaev',
  },
];

export default function Images() {
  return (
    <>
      <div className={scss.wrapper}>
        {images.length && (
          <div className={scss.images}>
            {images.map(({ src, alt }, index) => (
              <div className={scss.image_wrapper}>
                <Image key={index} src={src} alt={alt} className={scss.image} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
