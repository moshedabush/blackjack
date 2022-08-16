import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/img/homepage-hero.png";
import AppHeader from '../cmps/AppHeader.jsx';

export default class HomePage extends React.Component {

    render() {
        return (
            <div className="home">
                <main className="home-container flex align-center column">
                <AppHeader />
                    <h1>Welcome to BlackJack!</h1>
                    <div className="hero-img">
                        <img src={Hero} alt="" />
                    </div>
                    <Link to={"/blackjack"} className="start-btn">
                        Start
                    </Link>
                    <Link to={"/about"} className="about-btn">
                        Need to know more about the game?
                    </Link>
                </main>
            </div>
        );
    }
}


