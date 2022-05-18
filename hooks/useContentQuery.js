import useSWR from 'swr';
import { fetchPokemon, fetcher } from '@/api/content';

export const CACHE_KEY = '/api/v2/pokemon?limit=151';

export const useContentQuery = () => useSWR(CACHE_KEY, fetcher);
