<script lang="ts">
  /* eslint-disable import/no-mutable-exports */
  import type { Author, Github } from '$lib/types';

  export let authors: Author[];
  export let github: Github;
</script>

<article class="flex flex-col w-napari-section ml-napari-margin">
  <section>
    <header>
      <h1>
        <strong>Authors</strong>
      </h1>

      <ul class="list-none">
        {#each authors as author}
          <li class="not-last:mb-2">
            <a class="underline" href={`mailto:${author.email}`}>
              {author.name}
            </a>
          </li>
        {/each}
      </ul>
    </header>
  </section>

  <section class="mt-4">
    <header>
      <h1>
        <strong>Source code</strong>
      </h1>
    </header>

    <ul class="list-none">
      <li>
        <a class="underline" href={github.repo}>
          {github.name}
        </a>
      </li>
      <li>
        Stars: <strong>{github.stars}</strong>
      </li>
      <li>
        Forks: <strong>{github.forks}</strong>
      </li>
      <li>
        Issues + PRs:{' '}
        <strong>{github.issues + github.pullRequests}</strong>
      </li>
    </ul>
  </section>
</article>
