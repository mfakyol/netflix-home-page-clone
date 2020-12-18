import React from 'react'
import { Link } from 'react-router-dom'
import OurStory from '../our-story/OurStory/OurStory'
import classes from './style.module.css'

export default function Home(props) {
    localStorage.setItem("lang", JSON.stringify(props.language.lang))
    return (
        <div className={classes["home"]}>
            <OurStory language={props.language}/>
           <div className={classes["cv-links"]}>
           <Link className={classes["link"]} to="/cv">Cv</Link>
            <a target="_blank" className={classes["link"]} href="https://github.com/mfakyol/netflix-home-page-clone">Github</a>
           </div>
        </div>
    )
}
