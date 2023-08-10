import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Game[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { genres, error, isLoading };
};

export default useGenre;
