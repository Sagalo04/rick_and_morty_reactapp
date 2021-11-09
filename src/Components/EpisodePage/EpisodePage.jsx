import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Styles from "./EpisodePage.module.scss"
import hbo from '../../images/hbo.jpg'

function EpisodePage() {
    let { episodeId } = useParams("episodeId");

    const [episode, setEpisode] = useState("");
    const episodeurl = "https://rickandmortyapi.com/api/episode/"

    let getEpisode = async () =>
        await fetch(`${episodeurl}/${episodeId}`)
            .then((res) => res.json())
            .then((json) => {
                setEpisode(json)
            })
            .catch((error) => console.log(error));


    useEffect(() => {
        getEpisode();
    }, );

    return (
        <div className={Styles.o_back}>
            <div className={Styles.o_banner}>
            </div>
            <div className={Styles.o_container}>
                <div className={Styles.o_info}>
                    <h1>Episode: </h1>
                    <h1>{episode.name}</h1>
                    <h2>{episode.episode}</h2>
                    <h3>{episode.air_date}</h3>
                    <br />
                    <h2>Available:</h2>

                    <img src={hbo} alt="" />
                </div>
            </div>

        </div>
    );
}

export default EpisodePage;