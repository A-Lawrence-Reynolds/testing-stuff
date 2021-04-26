import React from "react";

import {Link } from "react-router-dom";

const Header = () => {



return(
    <>
    <div className="header">
    <h1>RandPic</h1>
    <p>find random pictures </p>
    <h1>welcome </h1>
    </div>
    <div className="navButtonDiv">

        <nav >

            <Link to='/LandingPage'><button className='menu-button'>Rand Pics</button></Link>
            <Link to='/PhotoDisplay'> <button className='menu-button'>to the Photos!</button></Link> 
        </nav>
    </div>
    

    </>
)


}

export default Header;