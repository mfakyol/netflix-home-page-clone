import React from 'react'
import EmailForm from '../../EmailForm/EmailForm'
import classes from './style.module.css'

export default function OurStoryHeros() {
    return (
        <div className={classes["story-card-heros"]}>
            <div className={classes["story-card-background"]}>
                <div className={classes["image-wrapper"]}>
                <img src={require("../../../../helpers/img/tr-bg.jpg")} alt=""/>
                <div className={classes["image-gradient"]}></div>
                </div>
            </div>
            <div className={classes["our-story-card-text"]}>
            <h1>Sınırsız film, dizi ve çok daha fazlası.</h1>
            <h2>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</h2>
            <EmailForm/>
            </div>
        </div>
    )
}
