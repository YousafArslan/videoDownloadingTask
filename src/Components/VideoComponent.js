import React, { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const VideoComponent = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [imageFile, setImageFile] = useState({});
  const [soundFile, setSoundFile] = useState({});
  const ffmpeg = createFFmpeg({
    log: true,
  });

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImageFile(file);
  };
  const handleChangeSound = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSoundFile(file);
  };

  const createVideo = async () => {
    await ffmpeg.load();
    ffmpeg.FS("writeFile", "image.png", await fetchFile(imageFile));
    ffmpeg.FS("writeFile", "sound.mp3", await fetchFile(soundFile));
    await ffmpeg.run(
      "-framerate",
      "1/10",
      "-i",
      "image.png",
      "-i",
      "sound.mp3",
      "-c:v",
      "libx264",
      "-t",
      "10",
      "-pix_fmt",
      "yuv420p",
      "-vf",
      "scale=1920:1080",
      "test.mp4"
    );
    const data = ffmpeg.FS("readFile", "test.mp4");
    setVideoSrc(
      URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }))
    );
  };

  return (
    <div>
      <br />
      <br />
      <video src={videoSrc} controls></video>
      <br />
      <br />

      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleChangeImage}
      ></input>
      <br />
      <br />
      <input
        type="file"
        id="sound"
        accept="sound/*"
        onChange={handleChangeSound}
      ></input>
      <button onClick={createVideo}>Create a video </button>
    </div>
  );
};

export default VideoComponent;
