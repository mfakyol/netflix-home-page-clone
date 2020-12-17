import React from "react";
import classes from "./style.module.css";

export default function OurStoryWatchOnTv(props) {
  const {h1, h2, image, video} = props.values;
  return (
    <div className={classes["story-card-watch-all"]}>
      <div className={classes["story-card-watch-all-container"]}>
        <div className={classes["card-text"]}>
          <h1>{h1}</h1>
          <h2>{h2}
          </h2>
        </div>
        <div className={classes["card-image-container"]}>
          <div className={classes["card-animation-container"]}>
            <img src={require(`../../../../helpers/img/${image}`)} alt="" />
            <div className={classes["card-animation-video-container"]}>
              <video
                className={classes["video"]}
                autoPlay
                muted
                loop
              >
                <source
                  src={require(`../../../../helpers/video/${video}`)}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
