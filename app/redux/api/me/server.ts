import { cookies as requestCookies, headers as requestHeaders } from 'next/headers';

export async function getMe(_req: GetMeRequest): Promise<GetMeResponse | undefined> {
  const session = requestCookies().get('session');

  if (!session) return;

  const xff = `${requestHeaders().get('x-forwarded-for')?.split(',')[0]}`;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/me`;
  const headers = new Headers();

  headers.append('x-forwarded-for', xff);
  headers.append('cookie', `session=${session.value}`);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });
    return response.json();
  } catch (error) {
    return;
  }
}
