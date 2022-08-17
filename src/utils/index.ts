// Calls an input function n times, returning an array containing the results of those function calls.
const times = (iteratee: (index: number) => any, n: number) => {
  return new Array(n).fill(null).map((_, i) => iteratee(i));
};

const first = <T>(arr: T[]) => arr[0];

// Send a certain number of requests to the specified URL.
const fetchMany = async (url: string, N: number) => {
  return Promise.all(times(_ => fetch(url), N));
};

// Returns a new list containing only one copy of each element in the original list, based upon the provided key
const uniqueBy = <T extends Record<K, number>, K extends keyof T>(key: K, arr: T[]): T[] => {
  return [...new Map(arr.map(item => [item[key], item])).values()];
};

export { times, first, fetchMany, uniqueBy };
