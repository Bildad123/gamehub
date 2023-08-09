import { Badge } from "@mui/material";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      badgeContent={score}
      color={score > 75 ? "info" : score > 60 ? "warning" : "error"}
      sx={{ mr: 2 }}
    />
  );
};

export default CriticScore;
