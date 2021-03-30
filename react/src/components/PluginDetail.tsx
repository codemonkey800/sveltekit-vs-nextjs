interface Props {
  content: string | string[];
  title: string;
}

export function PluginDetail({ content, title }: Props) {
  const data: string[] = content instanceof Array ? content : [content];

  return (
    <section tw="not-last:mb-6">
      <header>
        <h1>
          <strong>{title}</strong>
        </h1>
      </header>

      <ul tw="list-none">
        {data.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </section>
  );
}
