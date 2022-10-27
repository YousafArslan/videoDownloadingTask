import React from "react";
import { useEffect } from "react";

import useDownloader from "react-use-downloader";

const Video = (props) => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  useEffect(() => {
    download(props.link, props.name);
  }, []);

  return (
    <div>
      <p>Download is in {isInProgress ? "in progress" : "stopped"}</p>
      <button onClick={() => cancel()}>Cancel the download</button>
      <p>Download size in bytes {size}</p>
      <label for="file">Downloading progress:</label>
      <progress id="file" value={percentage} max="100" />
      <p>Elapsed time in seconds {elapsed}</p>
      {error && <p>possible error {JSON.stringify(error)}</p>}
    </div>
  );
};

export default Video;
