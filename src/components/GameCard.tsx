import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardMedia component="img" height="250" image={game.background_image} />
      <CardContent>{game.name}</CardContent>
    </Card>
  );
};
