import { cookies } from 'next/headers';

import axios from '../axios';

export async function getMe(_request: GetMeRequest): Promise<GetMeResponse | undefined> {
  const session = cookies().get('session');
  if (!session) return;

  try {
    const { data } = await axios.get('/me');
    return data;
  } catch (error) {
    return;
  }
}
