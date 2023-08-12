import { Grid, Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid
        p={3}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, md: 4, lg: 6, xl: 8 }}
      >
        {isLoading &&
          skeletons.map((index, skeleton) => (
            <Grid key={index} item xs={2} md={2} lg={2} xl={2}>
              <GameCardSkeleton />
            </Grid>
          ))}
        {data.map((game) => (
          <Grid key={game.id} item xs={2} md={2} lg={2} xl={2}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
