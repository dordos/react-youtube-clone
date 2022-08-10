import React, { useEffect, useState } from "react";
import "./App.scss";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import SearchBar from "./components/SearchBar";

interface requestOptions {
  method: string;
  redirect?: RequestRedirect;
}

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions: requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=AIzaSyDgj5FWXuAS2Q1fmF35exxPmIS3zXshODw`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item: any) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

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
      <SearchBar onSearch={search} />
      <div className="main__container">
        <Sidebar />
        <Content videoList={videos} />
      </div>
    </>
  );
}

export default App;
