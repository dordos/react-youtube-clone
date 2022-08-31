import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Youtube from "./data/yotube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App youtube={youtube} />);
