import React, { useState } from "react";
import "./App.css";
import { AdContext } from "./ads/AdContext";
import { AdKeywordsEnhancer } from "./ads/AdKeywordsEnhancer";

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
