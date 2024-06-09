'use server';

import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRandomPhoto() {
  try {
    noStore();
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}&w=1920&h=1080`,
    );
    const data = await response.json();
    return data.urls.regular;
  } catch (_) {}
}
