import React, { useContext } from "react";
import ReactDOM from "react-dom";
import regexifyString from "regexify-string";
import { CoffeeBanner } from "../banners/CoffeeBanner";
import { EspressoBanner } from "../banners/EspressoBanner";
import { AdContext } from "./AdContext";

const adKeywords = {
  coffee: <CoffeeBanner />,
  espresso: <EspressoBanner />,
};

export const AdKeywordsEnhancer = ({ text }) => {
  const { currentWord, setCurrentWord } = useContext(AdContext);

  const onClick = (keyword) => {
    setCurrentWord(keyword);
    ReactDOM.render(adKeywords[keyword], document.getElementById("adBanner"));
  };

  return regexifyString({
    pattern: /(coffee|espresso)/gim, //Could be improved
    decorator: (match, index) => {
      const color = match === currentWord ? "green" : "#61dafb";
      return (
        <a href={"#" + match} style={{ color }} onClick={() => onClick(match)}>
          {match}
        </a>
      );
    },
    input: text,
  });
};
