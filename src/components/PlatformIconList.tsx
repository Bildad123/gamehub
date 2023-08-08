import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Stack } from "@mui/material";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: JSX.Element } = {
    pc: <FaWindows color="grey" />,
    playStation: <FaPlaystation color="grey" />,
    xbox: <FaXbox color="grey" />,
    nintendo: <SiNintendo color="grey" />,
    mac: <FaApple color="grey" />,
    linux: <FaLinux color="grey" />,
    android: <FaAndroid color="grey" />,
    ios: <MdPhoneIphone color="grey" />,
    web: <BsGlobe color="grey" />,
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        {platforms.map((platform) => iconMap[platform.slug])}
      </Stack>
    </>
  );
};

export default PlatformIconList;
