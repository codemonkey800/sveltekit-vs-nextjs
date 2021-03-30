import Markdown from 'react-markdown';

import { LinkSection } from '@/components/LinkSection';
import { PluginDataSection } from '@/components/PluginDataSection';
import { useServerData } from '@/hooks/useServerData';

export function PluginPage() {
  const { data } = useServerData();

  return (
    <article tw="flex w-napari-container">
      <PluginDataSection />

      <section tw="flex w-napari-main flex-col overflow-x-hidden max-h-full prose">
        <Markdown>{data?.readme ?? ''}</Markdown>
      </section>

      <LinkSection />
    </article>
  );
}
