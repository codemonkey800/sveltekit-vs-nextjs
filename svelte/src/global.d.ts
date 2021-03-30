/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module 'svelte-markdown' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Markdown: any;

  // eslint-disable-next-line import/no-default-export
  export default Markdown;
}
