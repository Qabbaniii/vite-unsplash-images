import customPhotosFetch from "./utils";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";

export const useFetchPhotos = () => {
  const { searchQuery } = useGlobalContext();
  const clientId = import.meta.env.VITE_API_KEY;
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["images", searchQuery],
    queryFn: () =>
      customPhotosFetch.get(`/?client_id=${clientId}&query=${searchQuery}`),
  });
  return { data, isError, error, isLoading };
};
