import React from "react";
import "./brand.css";
import { atlassian, dropbox, google, shopify, slack } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand sectoin__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
