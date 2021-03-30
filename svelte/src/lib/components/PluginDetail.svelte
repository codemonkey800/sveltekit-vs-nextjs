<script lang="ts">
  export let content: string | string[];
  export let title: string;

  let data: string[];
  $: data = content instanceof Array ? content : [content];
</script>

<style lang="scss">
  section:not(:last-child) {
    @apply mb-6;
  }
</style>

<section>
  <header>
    <h1>
      <strong>{title}</strong>
    </h1>
  </header>

  <ul class="list-none">
    {#each data as value}
      <li>{value}</li>
    {/each}
  </ul>
</section>
