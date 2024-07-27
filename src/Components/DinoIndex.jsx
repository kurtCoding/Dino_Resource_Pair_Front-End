import React from "react";
import { useState, useEffect } from "react";
import DinoIndexItem from "./DinoIndexItem";


const API = import.meta.env.VITE_API_URL

const DinoIndex = () => {
    const [dinos, setDinos] = useState([]);
    useEffect(() => {
        console.log(API);
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
                return <DinoIndexItem key={dino.id} dino={dino} />
            })}
        </div>
    )
}

export default DinoIndex;