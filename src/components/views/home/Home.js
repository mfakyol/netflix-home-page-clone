import React from 'react'
import OurStory from '../our-story/OurStory/OurStory'
import classes from './style.module.css'

export default function Home(props) {

    return (
        <div className={classes["home"]}>
            <OurStory language={props.language}/>
        </div>
    )
}
