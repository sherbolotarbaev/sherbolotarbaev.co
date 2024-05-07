import path from 'node:path';
import { readFile } from 'node:fs/promises';

import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(dir: string) {
  try {
    const file = await readFile(path.join(process.cwd(), dir));
    const { base64 } = await getPlaiceholder(file);
    return base64;
  } catch (error: unknown) {
    if (error instanceof Error) return error.message;
    else if (error && typeof error === 'object' && 'message' in error)
      return error.message as string;
    else if (typeof error === 'string') return error;
    else return 'Unexpected error!';
  }
}
