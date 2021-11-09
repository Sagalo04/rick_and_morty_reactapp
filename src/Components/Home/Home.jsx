import React from 'react';
import Styles from './Home.module.scss'
import home from "../../images/home.png"
import logo from "../../images/logo.png"


function Home() {
    return (
        <div className={Styles.o_home}>
            <img className={Styles.o_img} src={home} alt="" />
            <div className={Styles.o_title}>
                <img src={logo} alt="" />
                <h1>React App</h1>
            </div>
        </div>
    );
}

export default Home;