import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import regexifyString from "regexify-string";

function App() {
  const [currentWord, setCurrentWord] = useState();

  return (
    <AdContext.Provider value={{ currentWord, setCurrentWord }}>
      <div className="App">
        <header className="App-header">
          <CoffeeSummary />
        </header>
      </div>
    </AdContext.Provider>
  );
}

const AdContext = React.createContext({
  currentWord: undefined,
  setCurrentWord: () => {},
});

const AdBanner = ({ marketingMessage, callToActionText, url }) => {
  return (
    <div className={"banner"}>
      {marketingMessage}
      <a className={"adButton"} target={"_blank"} href={url} rel="noreferrer">
        {callToActionText}
      </a>
    </div>
  );
};

const CoffeeBanner = () => (
  <AdBanner
    marketingMessage={"Love coffee?"}
    callToActionText={"Buy Coffee Now"}
    url={"https://www.google.com/search?q=coffee"}
  />
);

const EspressoBanner = () => (
  <AdBanner
    marketingMessage={"Learn to make espresso"}
    callToActionText={"Sign Up Now"}
    url={"https://www.google.com/search?q=espresso"}
  />
);

const adKeywords = {
  coffee: <CoffeeBanner />,
  espresso: <EspressoBanner />,
};

const AdKeywordsEnhancer = ({ text }) => {
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

const CoffeeSummary = () => {
  const summary =
    "I like coffee but coffee can require a lot of equipment to prepare," +
    "depending on the style you'd like. One of the simplest ways to make coffee," +
    " which requires little equipment, is cold brew. Cold brew is made with a pitcher," +
    " ground coffee, water, and a strainer / filter. On the other hand, espresso is more" +
    " complicated and usually requires an espresso machine, which can be quite expensive";

  return (
    <>
      <h1>Cold brew</h1>
      <AdKeywordsEnhancer text={summary} />
    </>
  );
};

export default App;
