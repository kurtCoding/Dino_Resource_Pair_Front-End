import React from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

const NewDino = () => {
    const [newDino, setNewDino] = useState({
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

    const handleTextChange = (event) => {
        setNewDino({...newDino, [event.target.id]: [event.target.value]});
    }

    const addDino = () => {
        fetch(`${API}/dinos`, {
            method: "POST",
            body: JSON.stringify(newDino),
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
        addDino();
        setNewDino({
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
                <input id="name" type="text" value={newDino.name} onChange={handleTextChange} required />
                <label htmlFor="era">Era:</label>
                <input id="era" type="text" value={newDino.era} onChange={handleTextChange} required />
                <label htmlFor="diet">Diet:</label>
                <input id="diet" type="text" value={newDino.diet} onChange={handleTextChange} required />
                <label htmlFor="length">Length:</label>
                <input id="length" type="number" value={newDino.length} onChange={handleTextChange} required />
                <label htmlFor="weight">Weight:</label>
                <input id="weight" type="number" value={newDino.weight} onChange={handleTextChange} required />
                <label htmlFor="habitat">Habitat:</label>
                <input id="habitat" type="text" value={newDino.habitat} onChange={handleTextChange} required />
                <label htmlFor="year_discovered">Year Discovered:</label>
                <input id="year_discovered" type="number" value={newDino.year_discovered} onChange={handleTextChange} required />
                <label htmlFor="bipedal">Bipedal:</label>
                <input id="bipedal" type="text" value={newDino.bipedal} onChange={handleTextChange} required />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewDino;