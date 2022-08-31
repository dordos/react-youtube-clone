import React, { useEffect, useState } from "react";
import "./App.scss";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import SearchBar from "./components/SearchBar";
interface requestOptions {
  method: string;
  redirect?: RequestRedirect;
}

function App({ youtube }: any) {
  const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);

  // const selectVideo = (video) => {
  //   setSelectedVideo(video);
  //   console.log(setSelectedVideo(video));
  // };

  const search = (query: any) => {
    youtube
      .search(query) //
      .then((videos: any) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos: any) => setVideos(videos));
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
