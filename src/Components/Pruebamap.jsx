import React, { useState, useEffect } from "react";

const Pruebamap = ({ type }) => {
    let [personajes, setPersonajes] = useState([]);

    const getAllCharacters = () =>
        fetch(`https://rickandmortyapi.com/api/character`)
            .then((res) => res.json())
            .then((json) => setPersonajes(json.results));

    useEffect(() => {
        getAllCharacters();
    }, []);
    return (
        <div>
            {personajes.map((element, i) => (
                <div>
                    <img src={element.image} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Pruebamap;