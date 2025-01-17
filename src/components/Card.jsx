import { useState, useEffect } from "react";

function Card({ id, handleClick }) {
    const [loading, setLoading] = useState(false);
    const [pokedex, setPokedex] = useState(null);

    useEffect(() => {
        const loadPokedex = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}/`,
                    { mode: "cors" }
                );

                const pokedexData = await response.json();

                setPokedex(pokedexData);
                setLoading(false);
            } catch (error) {
                console.log(`Error in api call: ${error}`);
                setLoading(false);
            }
        };

        loadPokedex();
    }, [id]);

    if (loading || !pokedex) {
        return (
            <div className="card-loading">{`Loading Pokémon #${id}...`}</div>
        );
    }

    const imgSrc = pokedex.sprites.front_default;
    const pokemonName =
        pokedex.name.slice(0, 1).toUpperCase() + pokedex.name.slice(1);

    return (
        <div className="card" onClick={handleClick}>
            <img className="card-image" src={imgSrc} alt={`Pokemon ${id}`} />
            <div className="card-name">{pokemonName}</div>
        </div>
    );
}

export { Card };
