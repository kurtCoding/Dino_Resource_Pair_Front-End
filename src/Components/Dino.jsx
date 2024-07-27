import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Dino = () => {
    
    const [dino, setDino] = useState({
        name: "",
        era: "",
        diet: "",
        length: 0,
        weight: 0,
        habitat: "",
        year_discovered: 0,
        bipedal: ""
    });

    let navigate = useNavigate();
    let {id} = useParams();

    useEffect(() => {
        fetch(`${API}/dinos/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((resJSON) => {
            console.log(resJSON)
            setDino(resJSON)
        })
        .catch(() => {
            navigate("/notfound");
        });
    }, [id, navigate]);

    const handleDelete = () => {
        fetch(`${API}/dinos/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            navigate("/dinos")
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1>{dino.name}</h1>
            <div>
                <p>{dino.era}</p>
                <p>{dino.diet}</p>
                <p>{dino.length}</p>
                <p>{dino.weight}</p>
                <p>{dino.habitat}</p>
                <p>{dino.year_discovered}</p>
                <p>{dino.bipedal}</p>
            </div>
            <Link to={`/dinos/${id}/edit`}>
            <button>Edit Dino</button>
            </Link>
            <button onClick={handleDelete}>Delete Dino</button>
        </div>
    )
};

export default Dino;