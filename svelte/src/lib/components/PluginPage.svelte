<script lang="ts">
  import type { PageData } from '$lib/types';
  import PluginDataSection from '$lib/components/PluginDataSection.svelte';
  import LinkSection from '$lib/components/LinkSection.svelte';
  import Markdown from '$lib/components/Markdown.svelte';

  export let data: PageData;
</script>

<article class="flex w-napari-container">
  <PluginDataSection {data} />

  <section
    class="flex w-napari-main flex-col overflow-x-hidden max-h-full prose"
  >
    <Markdown markdown={data.readme} />
  </section>

  <LinkSection authors={data.authors} github={data.github} />
</article>
