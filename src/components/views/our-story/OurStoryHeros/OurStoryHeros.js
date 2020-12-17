import React from 'react'
import EmailForm from '../../EmailForm/EmailForm'
import classes from './style.module.css'

export default function OurStoryHeros(props) {
    const{title, text, bg} = props.heros;
    const{email} = props;
    return (
        <div className={classes["story-card-heros"]}>
            <div className={classes["story-card-background"]}>
                <div className={classes["image-wrapper"]}>
                <img src={require(`../../../../helpers/img/${bg}`)} alt=""/>
                <div className={classes["image-gradient"]}></div>
                </div>
            </div>
            <div className={classes["our-story-card-text"]}>
            <h1>{title}</h1>
            <h2>{text}</h2>
            <EmailForm email={email}/>
            </div>
        </div>
    )
}
