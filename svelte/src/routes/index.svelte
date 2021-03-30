<script context="module" lang="ts">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit/types.internal';
  import type { PageData } from '$lib/types';
  import PluginPage from '$lib/components/PluginPage.svelte';

  export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
    const url = `${import.meta.env.VITE_SERVER_URL as string}/api/data`;
    const response = ((await fetch(url)) as unknown) as Response;

    const data = (await response.json()) as PageData;

    return response.ok
      ? { props: { data } }
      : {
          status: response.status,
          error: new Error('could not load server data'),
        };
  }
</script>

<script lang="ts">
  export let data: PageData;
</script>

<PluginPage {data} />
