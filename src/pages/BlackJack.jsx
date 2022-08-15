import React from "react";
import { generateDeck, dealCards } from "../cmps/DeckFunctions";
import Card from "../cmps/Card";

class BlackJack extends React.Component {

    state = {
        deck: [],
        dealer: null,
        player: null,
        wallet: 1000,
        message: null,
        inputValue: '',
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

    inputChange(e) {
        const inputValue = +e.target.value;
        if (!isNaN(inputValue)) this.setState({ inputValue });
    }

    render() {
        const { dealer, player } = this.state;
        return (
            <div className="game">
                <main className="game-container">
                    <h1>BlackJack</h1>
                    <p>Wallet: ${this.state.wallet}</p>
                    <div className="message-container">{this.state.message}</div>
                    <div className="input-bet">
                        <form>
                            <input type="text" name="bet" placeholder="Enter Your Bet" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                        </form>
                        <button onClick={() => { this.placeBet() }}>Place Bet</button>
                    </div>
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
