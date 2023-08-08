import { Grid, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid
        p={3}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, md: 4, lg: 6, xl: 8 }}
      >
        {games.map((game) => (
          <Grid key={game.id} item xs={2} md={2} lg={2} xl={2}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
