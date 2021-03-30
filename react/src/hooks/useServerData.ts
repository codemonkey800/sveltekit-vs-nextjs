import axios, { AxiosError } from 'axios';
import { QueryClient, useQuery, UseQueryResult } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { PageData } from '@/types';

async function getData(): Promise<PageData> {
  const { data } = await axios.get<PageData>('http://localhost:8080');
  return data;
}

export async function prefetchServerData(): Promise<DehydratedState> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('/', getData);

  return dehydrate(queryClient);
}

export function useServerData(): UseQueryResult<PageData, AxiosError> {
  return useQuery('/', getData);
}
