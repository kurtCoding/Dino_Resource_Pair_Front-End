import React from "react";
import { Link } from "react-router-dom";

const DinoIndexItem = ({ dino }) => {
    return (
        <div>
            <div>
                <p>{dino.name}</p>
                <p>{dino.habitat}</p>
                <p>{dino.year_discovered}</p>
            </div>
            <Link to={`/dinos/${dino.id}`}>Dino</Link>
        </div>
    )
}

export default DinoIndexItem;