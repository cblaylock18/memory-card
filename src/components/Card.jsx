function Card({ id }) {
    // is there where i need use effect because i'll be calling api?
    // https://pokeapi.co/api/v2/pokemon/{id or name}/
    // need to pull name and image from api call

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
