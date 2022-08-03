import React, { useEffect, useState } from "react";
import "./App.scss";
import HeaderBar from "./layout/HeaderBar";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";

interface requestOptions {
  method: string;
  redirect?: RequestRedirect;
}

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions: requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyDgj5FWXuAS2Q1fmF35exxPmIS3zXshODw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <HeaderBar />
      <div className="main__container">
        <Sidebar />
        <Content videos={videos} />
      </div>
    </>
  );
}

export default App;
