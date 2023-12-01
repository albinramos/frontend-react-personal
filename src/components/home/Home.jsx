import React from "react";
import profileImg from "../../assets/Happy-Person-PNG-Picture.png";

import './home.css';

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Home = () => {
    return (
    <section className="home" id='home'>
        <div className="home__wrapper">
        <div className="home__container container">
            

            <h1 className="home__title text-cs"><span>DAVID</span> RAMOS</h1>

            <p className="home__job">
                <span className="text-cs">Web Developer</span>
            </p>

            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileImg} alt="profile img" className="home__profile" />
                </div> 
            </div>

            <p className="home__text">
                Junior Web Designer de Bilbao.
            </p>
            <div className="home__socials">
                <a href='' className="home__social-link">
                    <FaInstagram />
                </a>
                <a href='' className="home__social-link">
                <FaFacebook />
                </a>
                <a href='' className="home__social-link">
                <FaLinkedin />
                </a>
            </div>
            <div className="home__btns">
                <a href="" className="btn">
                    Descarga CV
                </a>

            </div>
            </div>
        </div>

    </section>
    );
};

export default Home