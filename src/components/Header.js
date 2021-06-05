import React from "react";

import {Link } from "react-router-dom";

const Header = () => {



return(
    <>
    <div className="header">
    <h1>RandPic</h1>
    <p>find random pictures </p>
    <h1>welcome </h1>
    <p>
        Here at randpics pics you can find lots of random pictures and info about there content even tools used to take the photo 
    </p>
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