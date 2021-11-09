import React, { useEffect, useState } from 'react';

function Episode({ id }) {
    const [episode, setEpisode] = useState("");
    const episodeurl = "https://rickandmortyapi.com/api/episode/"
    let getEpisode = async () =>
        await fetch(`${episodeurl}/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setEpisode(json)
            })
            .catch((error) => console.log(error));

    useEffect(() => {
        getEpisode();
    }, []);

    return (
        <p>
            {episode.name}
        </p>
    );
}

export default Episode;