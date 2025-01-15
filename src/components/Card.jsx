import { useState, useEffect } from "react";

function Card({ id }) {
    const [loading, setLoading] = useState(false);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        try {
            const loadPokedex = async () => {
                setLoading(true);

                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon-species/${id}/`, //maybe change this back to overall dataset and remove species, then can pull name and image
                    { mode: "cors" }
                );

                const pokedexData = await response.json();

                setPokedex(pokedexData);
                setLoading(false);
            };

            loadPokedex();
        } catch (error) {
            console.log(`error in api call: ${error}`);
            setLoading(false);
        }
    }, [id]);

    // delete this effect when done debugging
    useEffect(() => {
        console.log("Updated pokedex:", pokedex); // Logs updated state
    }, [pokedex]);

    return (
        <div className="card">
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={id}
                height={300}
            />
        </div>
    );
}

export { Card };
