import { NextRequest } from 'next/server';
import { updateSession } from '@/utils/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { response } = updateSession(request);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
