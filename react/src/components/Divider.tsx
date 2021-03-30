import { HTMLAttributes } from 'react';

export function Divider(props: HTMLAttributes<HTMLDivElement>) {
  return <div tw="bg-black h-px" {...props} />;
}
