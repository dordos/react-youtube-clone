import React, { useEffect, useState } from "react";
import "./App.scss";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import SearchBar from "./components/SearchBar";
interface requestOptions {
  method: string;
  redirect?: RequestRedirect;
}

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  // const [selectVideo, setSelectVideo] = useState(null);

  // const selectVideo = (video) => {
  //   setSelectVideo(video);
  // };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    const requestOptions: requestOptions = {
      method: "GET",
      redirect: "follow",
    };
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
