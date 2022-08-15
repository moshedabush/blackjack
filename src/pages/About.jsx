import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../cmps/HomeHeader.jsx";

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="about">
                <main className="about-container">
                    <HomeHeader />
                    <h1>BlackJack Explaind:</h1>
                    Blackjack is a casino banked game, meaning that players compete against the house rather than each other.
                    The objective is to get a hand total of closer to 21 than the dealer without going over 21 (busting).
                    At the start of a Blackjack game, the players and the dealer receive two cards each.
                    Every Round that you win the dealer, you dobule your bet!
                    Enjoy!
                    <Link to={'/'}>
                        I'm Ready !!!
                    </Link>
                </main>
            </div>
        );
    }
}


