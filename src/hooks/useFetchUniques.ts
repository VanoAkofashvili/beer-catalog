import { useEffect, useRef, useState } from 'react';
import { first, fetchMany, uniqueBy } from 'utils';

interface Params {
  apiUrl: string;
  limit: number;
}

/**
 * Fetches resources one by one to get the entire list
 * @param {string} apiUrl - API endpoint
 * @param {number} limit - Number of items to fetch
 */
export function useFetchUniques<T extends { id: number }>({ apiUrl, limit }: Params) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<null | Error>(null);

  const isMounted = useRef(false);

  useEffect(() => {
    // To avoid sending requests twice in React.StrictMode
    if (isMounted.current) return;

    let cache: T[] = [];

    (async function fetchData(n) {
      try {
        const response = await fetchMany(apiUrl, n);
        const data = await Promise.all(response.map(p => p.json()));

        // Remove duplicates and items that are already in the cache.
        const uniqueItems = uniqueBy('id', data.map<T>(first)).filter(
          item => !cache.find(el => el.id === item.id),
        );

        // Update the cache for the next iteration.
        cache = cache.concat(uniqueItems);

        // Update the state to at least partially render already fetched items.
        setData(cache);

        // Check whether a new request should be sent. If so, send the remaining number of requests.
        cache.length < limit ? await fetchData(limit - cache.length) : setLoading(false);
      } catch (err) {
        setError(new Error(err as any));
        setLoading(false);
      }
    })(limit);
  }, [apiUrl, limit]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    loading,
    data,
    error,
  };
}
