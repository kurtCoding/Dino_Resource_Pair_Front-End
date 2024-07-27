import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <h1>DinoSite</h1>
            <Link to="/dinoindex">DinoDex</Link>
            <button type="submit">Add Dino</button>
        </div>
    )
}

export default NavBar;