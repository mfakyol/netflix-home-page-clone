import React from "react";
import classes from "./style.module.css";
import tv from "../../../../helpers/img/tv.png";
import videoTv from "../../../../helpers/video/video-tv.m4v";

export default function OurStoryWatchOnTv() {
  return (
    <div className={classes["story-card-watch-on-tv"]}>
      <div className={classes["story-card-watch-on-tv-container"]}>
        <div className={classes["card-text"]}>
          <h1>Televizyonunuzda izleyebilirsiniz.</h1>
          <h2>
            Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            oynatıcılar ve daha fazlasında seyredin.
          </h2>
        </div>
        <div className={classes["card-image-container"]}>
          <div className={classes["card-animation-container"]}>
            <img src={tv} alt="" />
            <div className={classes["card-animation-video-container"]}>
              <video
                className={classes["video"]}
                autoPlay
                muted
                loop
              >
                <source
                  src={videoTv}
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
