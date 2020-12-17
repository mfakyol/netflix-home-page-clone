import React from "react";
import classes from "./style.module.css";

export default function Footer(props) {


  const { values } = props;
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer"]}>
          <p
            dangerouslySetInnerHTML={{
              __html: values.title,
            }}
          ></p>
          <ul>
            {values.links.map((link) => {
              return (
                <li key={link}>
                  <a href="#link">{link}</a>
                </li>
              );
            })}
          </ul>
          <div className={classes["footer-lang"]}>
            <select defaultValue={values.lang} onChange={(e) => {
            if(values.lang !== e.target.value){
              window.location= e.target.value;
            }
          }}>
              <option value="tr">Türkçe</option>
              <option value="tr-en">English</option>
            </select>
          </div>
          <p className={classes["country"]}> Netflix {values.country}</p>
        </div>
      </div>
    </div>
  );
}
