<script lang="ts">
  import SearchBar from '$lib/components/SearchBar.svelte';
</script>

<nav
  class="flex justify-center items-center flex-auto bg-napari-primary h-napari-app-bar sticky top-0"
>
  <div class="flex w-napari-container">
    <header class="w-napari-section mr-napari-margin">
      <h1 class="mr-8">
        napari <strong>hub</strong>
      </h1>
    </header>

    <section class="w-napari-main">
      <SearchBar />
    </section>

    <section class="w-napari-section ml-napari-margin" />
  </div>
</nav>
