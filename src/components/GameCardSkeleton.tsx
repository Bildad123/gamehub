import { Skeleton, Box } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rounded"
        sx={{ width: "100", height: "365px" }}
      ></Skeleton>
    </>
  );
};

export default GameCardSkeleton;
