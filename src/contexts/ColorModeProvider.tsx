import React, { ReactNode, createContext } from "react";

interface Props {
  value: { toggleColorMode: () => void };
  children: ReactNode;
}
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
const ColorModeProvider = ({ value, children }: Props) => {
  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
