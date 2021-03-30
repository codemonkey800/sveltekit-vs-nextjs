<script lang="ts">
  import MdSearch from 'svelte-icons/md/MdSearch.svelte';
</script>

<!-- This is weird and hacky lol -->
<style lang="scss">
  :global(svg) {
    @apply ml-2;
    width: 20px !important;
  }
</style>

<form class="border-b-2 border-black flex items-center">
  <label for="plugin-search">Plugin Search</label>
  <input
    id="plugin-search"
    class="border-none bg-transparent outline-none flex flex-1"
  />
  <MdSearch />
</form>
