import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { PluginDetail } from '@/components/PluginDetail';
import { TagList } from '@/components/TagList';
import { useServerData } from '@/hooks/useServerData';

export function PluginDataSection() {
  const { data } = useServerData();

  const requirementsDetails = [
    {
      title: 'Requirements',
      content: data?.requirements ?? '',
    },
    {
      title: 'Python versions supported',
      content: data?.versions ?? [],
    },
    {
      title: 'Operating Systems',
      content: data?.operatingSystems ?? [],
    },
  ];
  const packageDetails = [
    {
      title: 'Version',
      content: data?.version ?? '',
    },
    {
      title: 'Release date',
      content: data?.releaseDate ?? '',
    },
    {
      title: 'First released',
      content: data?.firstRelease ?? '',
    },
    {
      title: 'Development status',
      content: data?.devStatus ?? '',
    },
    {
      title: 'License',
      content: data?.license ?? '',
    },
  ];

  return (
    <section tw="flex flex-col w-napari-section mr-napari-margin">
      <Button tw="mb-6">Install</Button>
      <TagList />
      <Divider tw="mt-4 mb-4" />

      <div>
        {requirementsDetails.map((details) => (
          <PluginDetail key={details.title} {...details} />
        ))}
      </div>

      <Divider tw="mt-4 mb-4" />

      <div>
        {packageDetails.map((details) => (
          <PluginDetail key={details.title} {...details} />
        ))}
      </div>
    </section>
  );
}
