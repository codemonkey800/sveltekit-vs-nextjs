import { ReactNode } from 'react';
import tw from 'twin.macro';

import { AppBar } from '@/components/AppBar';

interface Props {
  centered?: boolean;
  children: ReactNode;
}

export function Layout({ centered = false, children }: Props) {
  return (
    <>
      <AppBar />
      <main tw="flex flex-auto mt-8" css={[centered && tw`justify-center`]}>
        {children}
      </main>
    </>
  );
}
