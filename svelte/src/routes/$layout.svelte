<script lang="ts">
  import '$lib/global.css';

  import AppBar from '$lib/components/AppBar.svelte';
</script>

<svelte:head>
  <title>napari hub</title>
  <meta name="description" content="napari plugins yo" />
</svelte:head>

<AppBar />
<main class="flex flex-auto mt-8 justify-center">
  <slot />
</main>
