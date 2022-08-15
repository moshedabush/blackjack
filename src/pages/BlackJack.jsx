import React from "react";
import { generateDeck, dealCards, getRandomCard, getCount } from "../cmps/DeckFunctions";
import Card from "../cmps/Card";

class BlackJack extends React.Component {

    state = {
        deck: [],
        dealer: null,
        player: null,
        wallet: 1000,
        message: null,
        inputValue: '',
        gameStatus: null,
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
            dealer,
        })
    }

    placeBet() {
        const currentBet = this.state.inputValue;
        if (currentBet > this.state.wallet) {
            this.setState({ message: 'Insufficient funds to bet that amount.' });
        } else if (currentBet % 1 !== 0 || currentBet === 0) {
            this.setState({ message: 'Please bet whole numbers only.' });
        } else {
            const wallet = this.state.wallet - currentBet;
            this.setState({ wallet, inputValue: '', currentBet });
        }
    }

    hit() {
        if (!this.state.gameOver) {
            if (this.state.currentBet) {
                const { randomCard, updatedDeck } = getRandomCard(this.state.deck);
                const player = this.state.player;
                player.cards.push(randomCard);
                player.count = getCount(player.cards);

                if (player.count > 21) {
                    this.setState({ player, gameOver: true, message: 'BUST!' });
                } else {
                    this.setState({ deck: updatedDeck, player });
                }
            } else {
                this.setState({ message: 'Please place bet.' });
            }
        } else {
            this.setState({ message: 'Game over! Please start a new game.' });
        }
    }

    inputChange(e) {
        const inputValue = +e.target.value;
        if (!isNaN(inputValue)) this.setState({ inputValue });
    }

    render() {
        const { dealer, player, currentBet, inputValue, message } = this.state;
        return (
            <div className="game">
                <main className="game-container">
                    <h1>BlackJack</h1>
                    <p>Wallet: ${this.state.wallet}</p>
                    <div className="message-container">{message}</div>
                    {
                        !currentBet ?
                            <div className="input-bet">
                                <form>
                                    <input type="text" placeholder="Enter Your Bet" value={inputValue} onChange={this.inputChange.bind(this)} />
                                </form>
                                <button onClick={() => { this.placeBet() }}>Place Bet</button>
                            </div>
                            : <div>This Round Bet ${currentBet}
                            <br />
                            <button onClick={() => {this.hit()}}>Hit</button>
                            </div>
                    }
                    <div className="dealer">
                        Dealer's Cards ({dealer.count})<br />
                        {dealer.cards.map((card, i) => {
                            return <Card key={i} number={card.number} suit={card.suit} />
                        })}
                    </div>
                    <div className="player">
                        Your Cards  ({player.count})<br />
                        {player.cards.map((card, i) => {
                            return <Card key={i} number={card.number} suit={card.suit} />
                        })}
                        {console.log(this.state)}
                    </div>
                </main>
            </div>
        );
    }
}

export default BlackJack;
