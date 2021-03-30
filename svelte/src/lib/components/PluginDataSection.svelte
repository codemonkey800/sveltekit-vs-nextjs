<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import TagList from '$lib/components/TagList.svelte';
  import PluginDetail from '$lib/components/PluginDetail.svelte';

  import type { PageData } from '$lib/types';

  export let data: PageData;

  interface Detail {
    title: string;
    content: string | string[];
  }

  let requirementsDetails: Detail[];
  let packageDetails: Detail[];

  $: requirementsDetails = [
    {
      title: 'Requirements',
      content: data.requirements,
    },
    {
      title: 'Python versions supported',
      content: data.versions,
    },
    {
      title: 'Operating Systems',
      content: data.operatingSystems,
    },
  ];
  $: packageDetails = [
    {
      title: 'Version',
      content: data.version,
    },
    {
      title: 'Release date',
      content: data.releaseDate,
    },
    {
      title: 'First released',
      content: data.firstRelease,
    },
    {
      title: 'Development status',
      content: data.devStatus,
    },
    {
      title: 'License',
      content: data.license,
    },
  ];
</script>

<section class="flex flex-col w-napari-section mr-napari-margin">
  <Button>Install</Button>
  <TagList tags={data.tags} />
  <Divider />

  <div>
    {#each requirementsDetails as details}
      <PluginDetail {...details} />
    {/each}
  </div>

  <Divider />

  <div>
    {#each packageDetails as details}
      <PluginDetail {...details} />
    {/each}
  </div>
</section>
