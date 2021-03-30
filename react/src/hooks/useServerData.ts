import axios, { AxiosError } from 'axios';
import { QueryClient, useQuery, UseQueryResult } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { PageData } from '@/types';

async function getData(): Promise<PageData> {
  const url = `${process.env.SERVER_URL}/api/data`;
  const { data } = await axios.get<PageData>(url);
  return data;
}

export async function prefetchServerData(): Promise<DehydratedState> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('/api/data', getData);

  return dehydrate(queryClient);
}

export function useServerData(): UseQueryResult<PageData, AxiosError> {
  return useQuery('/api/data', getData);
}
