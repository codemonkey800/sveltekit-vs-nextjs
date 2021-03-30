import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: Props) {
  return (
    <button tw="bg-napari-primary h-napari-button" type="button" {...props}>
      {children}
    </button>
  );
}
