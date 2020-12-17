import React from "react";
import classes from "./style.module.css";
import FQAItem from "../FQAItem/FQAItem";
import EmailForm from "../EmailForm/EmailForm";

export default function FQA(props) {
  const { fqa } = props;
  return (
    <div className={classes["fqa-card"]}>
      <div className={classes["fqa-containder"]}>
        <h1>Sıkça Sorulan Sorular</h1>
        <ul className={classes["fqa-list"]}>{fqa.map((res)=>  <FQAItem key={res.title} title={res.title} text={res.text}/>)}</ul>
        <EmailForm/>
      </div>
    </div>
  );
}
