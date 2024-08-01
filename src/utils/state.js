import { useQuery, useQueryClient } from "@tanstack/react-query";

export const createGlobalState = (queryKey, initialData) => {
  return function () {
    const queryClient = useQueryClient();
    const { data } = useQuery({
      queryKey: [queryKey],
      queryFn: () => Promise.resolve(initialData),
      refetchInterval: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    });
    function setData(data) {
      queryClient.setQueryData([queryKey], data);
    }
    function resetData() {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      queryClient.refetchQueries({
        queryKey: [queryKey],
      });
    }
    return [data, setData, resetData];
  };
};
