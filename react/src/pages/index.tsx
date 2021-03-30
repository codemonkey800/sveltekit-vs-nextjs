import { GetServerSidePropsResult } from 'next';
import { DehydratedState } from 'react-query/hydration';

import { Layout } from '@/components/Layout';
import { PluginPage } from '@/components/PluginPage';
import { prefetchServerData, useServerData } from '@/hooks/useServerData';

interface ServerProps {
  dehydratedState: DehydratedState;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<ServerProps>
> {
  const dehydratedState = await prefetchServerData();
  return {
    props: { dehydratedState },
  };
}

export default function Home() {
  const { isLoading } = useServerData();

  return (
    <>
      <Layout>{isLoading ? <h1>Loading...</h1> : <PluginPage />}</Layout>
    </>
  );
}
