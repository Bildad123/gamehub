import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Typography } from "@mui/material";

interface Game {
  id: number;
  name: String;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<String>("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }, []);
  return (
    <>
      {error && <Typography>{error}</Typography>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
