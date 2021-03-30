<script lang="ts">
  import { onMount } from 'svelte';

  export let markdown: string;
  let rendered = '';

  onMount(async () => {
    const { default: marked } = await import('marked');
    rendered = marked(markdown);
  });
</script>

<article>
  {#if rendered}
    {@html rendered}
  {/if}
</article>
