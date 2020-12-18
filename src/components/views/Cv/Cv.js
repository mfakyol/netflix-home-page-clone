import React from "react";
import classes from "./style.module.css";

export default function Cv() {
  return (
    <div className={classes["cv-page"]}>
      <div className={classes["cv-container"]}>
        <div className={classes["left-vertical-line"]}></div>
        <div className={classes["cv-body"]}>
          <h1>Muhammed Fatih AKYOL</h1>
          <div className={classes["cv-section"]}>
            <h2>Kişisel Bilgiler</h2>
            <hr />
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Ad Soyad</span>
              <span className={classes["text"]}>Muhammed Fatih AKYOL</span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Dogum Tarihi</span>
              <span className={classes["text"]}>03.09.1997</span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Dogum Yeri</span>
              <span className={classes["text"]}>Tokat</span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Medeni Durumu</span>
              <span className={classes["text"]}>Bekar</span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Askerlik Durumu</span>
              <span className={classes["text"]}>Tescilli</span>
            </div>
          </div>
          <div className={classes["cv-section"]}>
            <h2>İletişim Bilgileri</h2>
            <hr />
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Adres</span>
              <span className={classes["text"]}>Tokat/Merkez</span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Telefon</span>
              <span className={classes["text"]}>0553 938 38 41</span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>E-posta</span>
              <span className={classes["text"]}>
                muhammedfatihakyol@gmail.com
              </span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Github</span>
              <span className={classes["text"]}>
               <a href="https://github.com/mfakyol">https://github.com/mfakyol</a>
              </span>
            </div>
          </div>
          <div className={classes["cv-section"]}>
            <h2>Eğitim Bilgileri</h2>
            <hr />
            <div className={classes["feature"]}>
              <span className={classes["title"]}>2015 - 2020+</span>
              <span className={classes["text"]}>Erciyes Üniversitesi Mühendislik Fakültesi Bilgisayar Mühendisliği</span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>2011 - 2015</span>
              <span className={classes["text"]}>Tokat İmam Hatip Lisesi</span>
            </div>
          </div>
          <div className={classes["cv-section"]}>
            <h2>Projeler</h2>
            <hr />
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Exam App</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Movie App</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Phone Dİrectory</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>basic-paint-with-js</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>basic-paint-with-js</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>to-do-list-with-express</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>vuejs-basic-fight-against-the-monster</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>countdown-example</span>
              <span className={classes["text"]}></span>
            </div>
  
          </div>
          <div className={classes["cv-section"]}>
            <h2>Yetenekler</h2>
            <hr />
            <div className={classes["feature"]}>
              <span className={classes["title"]}>JavaScript</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Html</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Css</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>React</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Vue.js</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Mongodb</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>MsSql</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>MySql</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Java</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>C#</span>
              <span className={classes["text"]}></span>
            </div>
            <div className={classes["feature"]}>
              <span className={classes["title"]}>Bootstrap</span>
              <span className={classes["text"]}></span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
