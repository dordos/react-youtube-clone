import React from "react";
import "./style.scss";
// import VideoItem from "../../components/VideoItem";

const Content = (props: any) => {
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
      <div>
        <ul>
          {props.videos.map((video: any) => {
            return <li>{video.snippet.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Content;
