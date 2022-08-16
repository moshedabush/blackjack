import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/img/homepage-hero.png";
import HomeHeader from "../cmps/HomeHeader.jsx";

export default class HomePage extends React.Component {

    render() {
        return (
            <div className="home">
                <main className="home-container flex align-center column">
                    <HomeHeader />
                    <div className="hero-img">
                        <img src={Hero} alt="" />
                    </div>
                    <h1>Welcome to BlackJack!</h1>
                    <Link to={"/blackjack"} state={this.state} className="start-btn">
                        Start
                    </Link>
                    <Link to={"/about"}>
                        Need to know more about the game?
                    </Link>
                </main>
            </div>
        );
    }
}


