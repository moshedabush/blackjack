import React from "react";

class BlackJack extends React.Component {

    state = {
        deck: [],
        dealer: null,
        player: null,
    };

    componentWillMount = () => {
        this.startNewGame();
    };
    
    generateDeck() {
        const cards = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        const suits = ['♦','♣','♥','♠'];
        const deck = [];
        for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                deck.push({number: cards[i], suit: suits[j]});
            }
        }
        return deck;
    }
    startNewGame(){
        const deck = this.generateDeck();
        const { updatedDeck, player, dealer } = this.dealCards(deck);
        this.setState({
            deck:updatedDeck,
            player,
            dealer
        })
    }

    dealCards(deck){
        const playerCard = this.getRandomCard(deck);
        const dealerCard = this.getRandomCard(playerCard.updatedDeck);
        return {updatedDeck:dealerCard.updatedDeck , player:playerCard.randomCard, dealer:dealerCard.randomCard}
    }
    
    getRandomCard(deck) {
        const updatedDeck = deck;
        const randomIndex = Math.floor(Math.random() * updatedDeck.length);
        const randomCard = updatedDeck[randomIndex];
        updatedDeck.splice(randomIndex, 1);
        return { randomCard, updatedDeck };
    }

    render() {
        return (
            <div className="game">
                <main className="game-container">
                    <h1>BlackJack</h1>
                    <button onClick={() => {this.startNewGame()}}>Start game</button>
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

export default BlackJack ;
