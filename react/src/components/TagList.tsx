import { useServerData } from '@/hooks/useServerData';

export function TagList() {
  const { data } = useServerData();
  const tags = data?.tags ?? [];

  return (
    <ul tw="list-none">
      {tags.map((tag) => (
        <li tw="bg-gray-100 rounded-full p-2 mb-2 w-max" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
