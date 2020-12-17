import React, { Component } from "react";
import classes from "./style.module.css";

export default class FQAItem extends Component {
  state = {
    isActive: false,
  };
  toggle(e) {
    this.setState({
      isActive: !this.state.isActive,
    });
  }
  render() {
    const { isActive } = this.state;
    const { title, text } = this.props;
    return (
      <div className={classes["fqa-item"]}>
        <h1 onClick={this.toggle.bind(this)}>
          {title}{" "}
          <svg className={isActive ? classes["active"] : ""}>
            <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
          </svg>
        </h1>
        <div
          className={classes["fqa-text"]}
          style={{ maxHeight: isActive ? "2000px" : "0px" }}
        >
          <span             dangerouslySetInnerHTML={{
              __html:text,
            }}></span>
        </div>
      </div>
    );
  }
}
