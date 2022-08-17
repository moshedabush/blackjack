import React from "react";
import { Link } from "react-router-dom";
import AppHeader from '../cmps/AppHeader.jsx';
import Hero from "../assets/img/about-page.svg";

class AboutPage extends React.Component {
    render() {
        return (
            <div className="about">
                <main className="about-container flex align-center column">
                    <AppHeader />
                    <div className="hero-img">
                        <img src={Hero} alt="" />
                    </div>
                    <div className="about-info flex align-center column">
                        <h1>BlackJack Explaind:</h1>
                        <p>
                            Blackjack is a casino banked game, meaning that players compete against the house rather than each other.
                            The objective is to get a hand total of closer to 21 than the dealer without going over 21 (busting).
                            At the start of a Blackjack game, the players and the dealer receive two cards each.
                            Every Round that you win the dealer, you dobule your bet!
                            Enjoy!
                        </p>
                    </div>
                    <Link to={"/blackjack"} className="start-btn">
                        Let's start
                    </Link>
                </main>
            </div>
        );
    }
}

export default AboutPage;
