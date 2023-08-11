import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <>
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
