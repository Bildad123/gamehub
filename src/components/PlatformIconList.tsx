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
    pc: <FaWindows key="pc" color="grey" />,
    playStation: <FaPlaystation key="playstation" color="grey" />,
    xbox: <FaXbox key="xbox" color="grey" />,
    nintendo: <SiNintendo key="nintendo" color="grey" />,
    mac: <FaApple key="mac" color="grey" />,
    linux: <FaLinux key="linux" color="grey" />,
    android: <FaAndroid key="android" color="grey" />,
    ios: <MdPhoneIphone key="ios" color="grey" />,
    web: <BsGlobe key="web" color="grey" />,
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
