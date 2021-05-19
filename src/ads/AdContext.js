import React from "react";

export const AdContext = React.createContext({
  currentWord: undefined,
  setCurrentWord: () => {},
});
