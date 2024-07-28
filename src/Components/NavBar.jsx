import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
           <p> <Link to="/dinos">DinoDex</Link> </p><br/>
            <p> <Link to="/">Home</Link> </p>
        </div>
    )
}

export default NavBar;