import React from "react";
import { Game } from "../hooks/useGames";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card      >
      <CardMedia component="img" height="250" image={game.background_image} />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </Box>

        <Typography sx={{ fontWeight: 500, fontSize: 18, pt: 2 }}>
          {game.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
