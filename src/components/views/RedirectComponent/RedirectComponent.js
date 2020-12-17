import React from 'react'
import { Redirect } from 'react-router-dom';

export default function RedirectComponent() {
    const lang =JSON.parse(localStorage.getItem("lang")) 
    if(lang ==="tr-en") return <Redirect to="/tr-en"/>
    return <Redirect to="/tr"/>
}
