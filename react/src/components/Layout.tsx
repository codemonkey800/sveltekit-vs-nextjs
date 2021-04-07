import { ReactNode } from 'react';

import { AppBar } from '@/components/AppBar';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <AppBar />
      <main tw="flex flex-auto mt-8 justify-center">{children}</main>
    </>
  );
}
