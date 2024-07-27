import React from "react";
import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL

const DinoIndex = () => {
    const [dinos, setDinos] = useState([]);
    useEffect(() => {
        fetch(`${API}/dinos`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setDinos(data)
        })
        .catch((error) => console.error(error))
    }, []);

    return (
        <div>
            {dinos.map((dino) => {
                return <Dino key={dino.id} dino={dino} />
            })}
        </div>
    )
}

export default DinoIndex;