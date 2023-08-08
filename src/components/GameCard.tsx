import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardMedia component="img" height="250" image={game.background_image} />
      <CardContent>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
        <Typography sx={{ fontWeight: 500, fontSize: 18, pt: 2 }}>
          {game.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
