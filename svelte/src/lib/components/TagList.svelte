<script lang="ts">
  /* eslint-disable import/no-mutable-exports */

  export let tags: string[];
</script>

<ul class="list-none">
  {#each tags as tag}
    <li class="bg-gray-100 rounded-full p-2 mb-2 w-max">
      {tag}
    </li>
  {/each}
</ul>
