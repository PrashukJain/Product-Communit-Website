import React from 'react'
import Search from './Search'
import Header from './Header'
import {Redirect} from 'react-router-dom'
export default function WelcomePage() {
    const token=localStorage.getItem("token");
    if(token===null)
    return <Redirect to='/login'  />

    return (
        <div className="imageCSS">
            <Header/>
            <Search align={true} searchValue={null}/>
        </div>
    )
}
