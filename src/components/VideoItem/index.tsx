import React from "react";
import "./style.scss";

const VideoItem = ({ video }: any) => {
  return (
    <li className="videoItem__container">
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <div>
        <div>
          <div className="title">{video.snippet.title}</div>
          <div className="channelTitle">
            <span>{video.snippet.channelTitle}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
