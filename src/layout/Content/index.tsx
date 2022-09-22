import React from "react";
import "./style.scss";
import VideoItem from "../../components/VideoItem";

const Content = ({ videoList }: any) => {
  return (
    <div className="content__container">
      <div className="content__group__list">
        <ul>
          <li>All</li>
          <li>Gaming</li>
          <li>Live</li>
          <li>Music</li>
          <li>Desserts</li>
          <li>Cooking shows</li>
          <li>Tourist destinations</li>
          <li>Background music</li>
          <li>Dogs</li>
        </ul>
      </div>
      <div className="content__videoList">
        <ul>
          {videoList.map((video: any) => {
            return <VideoItem key={video.id} video={video} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Content;
