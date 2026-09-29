import { NextRequest } from 'next/server';
import { updateSession } from '@/utils/lib/supabase/proxy';

export async function proxy(request: NextRequest) {
  const { response } = await updateSession(request);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
