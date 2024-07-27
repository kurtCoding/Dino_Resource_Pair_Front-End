import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

const EditDino = () => {
    
    const [dinoDetails, setDinoDetails] = useState({
        name: "",
        era: "",
        diet: "",
        length: 0,
        weight: 0,
        habitat: "",
        year_discovered: 0,
        bipedal: ""
    })

    let navigate = useNavigate();
    let {id} = useParams();

    const handleTextChange = (event) => {
        setDinoDetails({...dinoDetails, [event.target.id]: event.target.value})
    }

    useEffect(() => {
        fetch(`${API}/dinos/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((resJSON) => {
            setDinoDetails(resJSON)
        })
        .catch((error) => console.error(error))
    }, [id]);

    const updateDino = () => {
        fetch(`${API}/dinos/${id}`, {
            method: "PUT",
            body: JSON.stringify(dinoDetails),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate("/dinos");
        })
        .catch((error) => console.error(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateDino();
        setDinoDetails({
            name: "",
            era: "",
            diet: "",
            length: 0,
            weight: 0,
            habitat: "",
            year_discovered: 0,
            bipedal: ""
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={dinoDetails.name} onChange={handleTextChange} required />
                <label htmlFor="era">Era:</label>
                <input id="era" type="text" value={dinoDetails.era} onChange={handleTextChange} required />
                <label htmlFor="diet">Diet:</label>
                <input id="diet" type="text" value={dinoDetails.diet} onChange={handleTextChange} required />
                <label htmlFor="length">Length:</label>
                <input id="length" type="number" value={dinoDetails.length} onChange={handleTextChange} required />
                <label htmlFor="weight">Weight:</label>
                <input id="weight" type="number" value={dinoDetails.weight} onChange={handleTextChange} required />
                <label htmlFor="habitat">Habitat:</label>
                <input id="habitat" type="text" value={dinoDetails.habitat} onChange={handleTextChange} required />
                <label htmlFor="year_discovered">Year Discovered:</label>
                <input id="year_discovered" type="number" value={dinoDetails.year_discovered} onChange={handleTextChange} required />
                <label htmlFor="bipedal">Bipedal:</label>
                <input id="bipedal" type="text" value={dinoDetails.bipedal} onChange={handleTextChange} required />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditDino;