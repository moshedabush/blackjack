import React from "react";
import { generateDeck, dealCards } from "../cmps/DeckFunctions";

class BlackJack extends React.Component {

    state = {
        deck: [],
        dealer: null,
        player: null,
    };

    componentWillMount = () => {
        this.startNewGame();
    };

    startNewGame() {
        const deck = generateDeck();
        const { updatedDeck, player, dealer } = dealCards(deck);
        this.setState({
            deck: updatedDeck,
            player,
            dealer
        })
    }

    render() {
        return (
            <div className="game">
                <main className="game-container">
                    <h1>BlackJack</h1>
                    <button onClick={() => { this.startNewGame() }}>New game</button>
                    <div className="dealer">
                        {this.state.dealer.number}
                    </div>
                    <div className="player">
                        <p>{this.state.player.number}</p>
                        {console.log(this.state)}
                    </div>
                </main>
            </div>
        );
    }
}

export default BlackJack;
