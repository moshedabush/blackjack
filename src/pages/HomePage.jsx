import React from "react";
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
                    HOME
                </main>
            </div>
        );
    }
}


