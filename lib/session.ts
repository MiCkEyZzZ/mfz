import { getServerSession, Session } from 'next-auth';

import { authOptions } from './auth';

export async function getSession(): Promise<Session | null> {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();

  return session?.user;
}
