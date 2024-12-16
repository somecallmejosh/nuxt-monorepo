export const useGetData = (endpoint) => {
  const { data, error } = useAsyncData(
    'get-users', // Key to cache the data
    () => $fetch(endpoint) // API call
  );

  return { data, error };
}
