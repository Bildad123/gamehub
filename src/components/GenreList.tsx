import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import useGenre from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
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
            <ListItemText primary={<Typography> {genre.name} </Typography>} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
