import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../cmps/HomeHeader.jsx";

export default class HomePage extends React.Component {

    state = {
    };

    componentDidMount = () => {
    };

    render() {
        return (
            <div className="home">
                <main className="home-container">
                    <HomeHeader />
                    <h1>Welcome to BlackJack!</h1>
                    Enter your name:
                    Enter your budget:
                    <Link to={'/blackjack'}>
                        Start
                    </Link>
                    <br />
                     <Link to={'/about'}>
                     Need to know more about the game?
                    </Link>
                </main>
            </div>
        );
    }
}


