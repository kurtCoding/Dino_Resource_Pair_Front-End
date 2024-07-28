import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/dinos">DinoDex</Link>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NavBar;