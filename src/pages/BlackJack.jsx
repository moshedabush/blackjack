import React from "react";
import { generateDeck, dealCards } from "../cmps/DeckFunctions";
import Card from "../cmps/Card";

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
        const { dealer, player } = this.state;
        return (
            <div className="game">
                <main className="game-container">
                    <h1>BlackJack</h1>
                    <div className="dealer">
                        Dealer's Cards ({dealer.count})<br />
                        {dealer.cards.map((card,i) =>{
                            return <Card key={i} number={card.number} suit={card.suit}/>
                        })}
                    </div>
                    <div className="player">
                        Your Cards  ({player.count})<br />
                        {player.cards.map((card,i) =>{
                            return <Card key={i} number={card.number} suit={card.suit}/>
                        })}
                        {console.log(this.state)}
                    </div>
                </main>
            </div>
        );
    }
}

export default BlackJack;
