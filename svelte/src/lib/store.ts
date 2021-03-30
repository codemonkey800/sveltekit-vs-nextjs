// eslint-disable-next-line import/no-extraneous-dependencies
import { writable } from 'svelte/store';
import type { PageData } from '$lib/types';

export const pageData = writable<PageData | null>(null);
