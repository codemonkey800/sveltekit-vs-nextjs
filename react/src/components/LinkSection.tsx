import { useServerData } from '@/hooks/useServerData';

export function LinkSection() {
  const { data } = useServerData();
  const { authors = [], github } = data ?? {};

  return (
    <article tw="flex flex-col w-napari-section ml-napari-margin">
      <section>
        <header>
          <h1>
            <strong>Authors</strong>
          </h1>

          <ul tw="list-none">
            {authors.map((author) => (
              <li tw="not-last:mb-2" key={author.name}>
                <a tw="underline" href={`mailto:${author.email}`}>
                  {author.name}
                </a>
              </li>
            ))}
          </ul>
        </header>
      </section>

      <section tw="mt-4">
        <header>
          <h1>
            <strong>Source code</strong>
          </h1>
        </header>

        {github && (
          <ul tw="list-none">
            <li>
              <a tw="underline" href={github.repo}>
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
        )}
      </section>
    </article>
  );
}
