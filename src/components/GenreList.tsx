import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import useGenre, { Genre } from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onGenreSelect: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onGenreSelect }: Props) => {
  const { data, isLoading } = useGenre();
  return (
    <>
      {isLoading && <GenreListSkeleton />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <ListItemAvatar>
              <Avatar src={genre.image_background} />
            </ListItemAvatar>
            <ListItemButton
              selected={genre?.id === selectedGenre?.id}
              onClick={() => onGenreSelect(genre)}
            >
              {genre.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
