<script context="module" lang="ts">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit/types.internal';
  import type { PageData } from '$lib/types';
  import PluginPage from '$lib/components/PluginPage.svelte';

  export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
    const response = ((await fetch(
      'http://localhost:8080',
    )) as unknown) as Response;

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
