import React, { useState, useEffect } from "react";
import Styles from "./CardDeck.module.scss"
import 'bulma/css/bulma.min.css';
import banner from "../../images/Banner.png"
import { Link, Outlet } from "react-router-dom";
const CardDeck = ({ type }) => {
    const [personajes, setPersonajes] = useState([]);
    const [info, setInfo] = useState([])

    const initialUrl = 'https://rickandmortyapi.com/api/character/'

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log("bottom")
        }
    }

    const getAllCharacters = async (url) =>
        await fetch(url)
            .then((res) => res.json())
            .then((json) => {
                var arrayaux
                if (url === initialUrl) {
                    arrayaux = json.results
                } else {
                    arrayaux = personajes
                    arrayaux = arrayaux.concat(json.results)
                }
                setPersonajes(arrayaux)
                setInfo(json.info)
            });

    const handleButtonScroll = () => {
        getAllCharacters(info.next);
    };

    useEffect(() => {
        getAllCharacters(initialUrl);
    },[] );



    return (
        <div className={Styles.o_container} onScroll={handleScroll}>
            <img className={Styles.o_banner} src={banner} alt="" />
            <div className={Styles.o_cardDeck + " columns is-multiline is-centered"} >
                {personajes.map((element, i) => (
  
                        <Link to={`/characters/${element.id}`} key={i} className={"column is-variable is-3-desktop is-one-quarter-desktop is-half-tablet " + Styles.o_card}>
                            <img src={element.image} alt={element.name} />
                            <h1>{element.name}</h1>
                        </Link>

                ))}
            </div>
            {info.next ? <button className="button is-primary is-inverted is-outlined" onClick={handleButtonScroll}>
                More
            </button> : null}
<Outlet />
        </div>

    );
}

export default CardDeck;