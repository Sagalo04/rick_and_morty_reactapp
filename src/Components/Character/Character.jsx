import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Episode from '../Episode/Episode';
import Styles from "./Character.module.scss"

function Character() {
    let { characterId } = useParams("characterId");

    const [personaje, setPersonaje] = useState("");
    const [location, setLocation] = useState("");
    const [origin, setOrigin] = useState("");
    const [urlepisodes, setUrlepisodes] = useState([]);

    const characterurl = "https://rickandmortyapi.com/api/character/"

    let getCharacter = async () =>
        await fetch(`${characterurl}/${characterId}`)
            .then((res) => res.json())
            .then((json) => {
                setPersonaje(json)
                setOrigin(json.origin.name)
                setLocation(json.location.name)
                setUrlepisodes(json.episode)
            })
            .catch((error) => console.log(error));


    useEffect(() => {
        getCharacter();
    }, );

    return (
        <div className={Styles.o_back}>
            <div className={Styles.o_banner}>
            </div>
            <div className={Styles.o_container}>
                <img src={personaje.image} alt="" />

                <div className={Styles.o_info}>
                    <h1>{personaje.name}</h1>
                    <h2> <span>Status: </span>{personaje.status}</h2>
                    <h2> <span>Species: </span>{personaje.species}</h2>
                    {personaje.type ? <h2> <span>Type: </span>{personaje.type}</h2> : null}
                    <h2> <span>Origin: </span>{origin}</h2>
                    <h2> <span>Location: </span>{location}</h2>
                </div>
            </div>
                <h1 className={Styles.title_episodes}>Episodes</h1>
                <div className={Styles.cont_episodes}>
                    {urlepisodes.map((element, i) => (
                        <Link className={Styles.episode} key={i} to={`/episode/${element.split("/").at(-1)}`}>
                            <Episode id={element.split("/").at(-1)} />
                        </Link>

                    ))}
                </div>

        </div>
    );
}

export default Character;