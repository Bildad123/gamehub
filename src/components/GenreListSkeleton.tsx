import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

const GenreListSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <List>
      {data.map((data, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Typography>{""}</Typography>} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
