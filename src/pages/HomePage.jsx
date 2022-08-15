import React from "react";
import { Link } from "react-router-dom";
import  HomeHeader  from "../cmps/HomeHeader.jsx";

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
                    <h1>Welcome</h1>
                    <Link to={'/blackjack'}>
                        Start
                    </Link>
                </main>
            </div>
        );
    }
}


