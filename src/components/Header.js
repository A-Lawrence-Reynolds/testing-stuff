import React from "react";

import {Link } from "react-router-dom";

const Header = () => {



return(
    <>
    <div className="header">
    <h1>RandPic</h1>
    <p>find random pictures </p>
    </div>
    <div>
        <nav>
            <Link to='/PhotoDisplay'> <button> to the Photos!</button></Link> 
        </nav>
    </div>
    

    </>
)


}

export default Header;