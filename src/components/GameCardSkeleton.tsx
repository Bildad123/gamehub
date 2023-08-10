import { Skeleton, Box } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <>
      <Skeleton variant="rounded" sx={{ width: "100", height: 350 }}></Skeleton>
    </>
  );
};

export default GameCardSkeleton;
