import React from "react";
import classes from "./style.module.css";

export default function OurStoryMobile(props) {
  const { h1, h2, image, inlineImage, downloadText } = props.values;
  return (
    <div className={classes["story-card-mobile"]}>
      <div className={classes["story-card-mobile-container"]}>
        <div className={classes["card-text"]}>
          <h1>{h1}</h1>
          <h2>{h2}</h2>
        </div>
        <div className={classes["card-image-container"]}>
          <div className={classes["card-animation-container"]}>
            <img src={require(`../../../../helpers/img/${image}`)} alt="" />
            <div className={classes["card-animation"]}>
              <div className={classes["card-animation-image"]}>
                <img
                  src={require(`../../../../helpers/img/${inlineImage}`)}
                  alt=""
                />
              </div>
              <div className={classes["card-animation-text"]}>
                <div className={classes["animation-text-1"]}>
                  Stranger Things
                </div>
                <div className={classes["animation-text-2"]}>
                  {downloadText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
