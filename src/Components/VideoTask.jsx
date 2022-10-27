import React from "react";
import Video from "./Video";
import { useState } from "react";

const VideoTask = () => {
  const [shoudDownload, setShouldDowload] = useState(false);
  const filename = ["1.mp4", "2.mp4", "3.mp4"];
  const fileUrl = [
    "https://res.cloudinary.com/demo/video/upload/c_fill,g_auto:faces,h_550,w_550/r_20/v1/docs/walking_talking.mp4",
    "https://res.cloudinary.com/demo/video/upload/c_fill,g_auto:faces,h_300,w_300/r_20/v1/docs/walking_talking.mp4",
    "https://res.cloudinary.com/demo/video/upload/c_fill,g_auto:faces,h_450,w_450/r_20/v1/docs/walking_talking.mp4",
  ];
  return (
    <div>
      <button onClick={() => setShouldDowload(!shoudDownload)}>
        {shoudDownload ? "Click to go back" : "Click to download the file"}
      </button>
      {shoudDownload &&
        filename.map((item, idx) => {
          return <Video name={item} link={fileUrl[idx]} />;
        })}
    </div>
  );
};

export default VideoTask;
