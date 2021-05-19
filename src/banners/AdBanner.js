import React from "react";

export const AdBanner = ({ marketingMessage, callToActionText, url }) => {
  return (
    <div className={"banner"}>
      {marketingMessage}
      <a className={"adButton"} target={"_blank"} href={url} rel="noreferrer">
        {callToActionText}
      </a>
    </div>
  );
};
