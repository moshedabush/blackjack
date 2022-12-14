import React from "react";
import { generateDeck, dealCards, getRandomCard, getCount, getWinner, dealerDraw } from "../cmps/DeckFunctions";
import Card from "../cmps/Card";
import BackGround from "../assets/img/black-jack-background.jpg";
import Loader from '../cmps/Loader';
import BetAudio from '../assets/audio/bet.mp3';

class BlackJack extends React.Component {

    state = {
        deck: [],
        dealer: null,
        player: null,
        dealerWinCount: 0,
        playerWinCount: 0,
        wallet: 1000,
        message: null,
        inputValue: '',
        gameOver: false,
    };

    componentWillMount = () => {
        this.startNewGame();
    };

    startNewGame() {
        const deck = generateDeck();
        const { updatedDeck, player, dealer } = dealCards(deck);
        this.setState({
            deck: updatedDeck,
            dealer,
            player,
            message: null,
            gameOver: false,
            currentBet: 0,
        })
        if (this.state.wallet === 0)
            this.setState({ wallet: 1000, message: '1000$ added to your wallet good luck!' })
    }

    placeBet() {
        const currentBet = this.state.inputValue;
        if (currentBet > this.state.wallet) {
            this.setState({ message: 'Insufficient funds to bet that amount.' });
        } else if (currentBet % 1 !== 0 || currentBet === 0) {
            this.setState({ message: 'Please bet whole numbers only.' });
        } else {
            let betSound = new Audio(BetAudio);
            betSound.play();
            const wallet = this.state.wallet - currentBet;
            this.setState({ wallet, inputValue: '', currentBet });
        }
    }

    hit() {
        if (!this.state.gameOver) {
            if (this.state.currentBet) {
                const { randomCard, updatedDeck } = getRandomCard(this.state.deck);
                const { player } = this.state;
                player.cards.push(randomCard);
                player.count = getCount(player.cards);

                if (player.count > 21) {
                    this.setState({ player, dealerWinCount: this.state.dealerWinCount + 1, gameOver: true, message: 'BUST!' });
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

    stand() {
        if (!this.state.gameOver) {
            const randomCard = getRandomCard(this.state.deck);
            let deck = randomCard.updatedDeck;
            let { dealer, player } = this.state;
            let { playerWinCount, dealerWinCount } = this.state;
            dealer.cards.pop();
            dealer.cards.push(randomCard.randomCard);
            dealer.count = getCount(dealer.cards);
            while (dealer.count < 17) {
                const draw = dealerDraw(dealer, deck);
                dealer = draw.dealer;
                deck = draw.updatedDeck;
            }
            if (dealer.count > 21) {
                this.setState({
                    deck,
                    dealer,
                    wallet: this.state.wallet + this.state.currentBet * 2,
                    gameOver: true,
                    message: 'Dealer bust! You win!',
                    playerWinCount: playerWinCount + 1
                });
            } else {
                const winner = getWinner(dealer, player);
                let wallet = this.state.wallet;
                let message;
                if (winner === 'dealer') {
                    message = 'Dealer wins...';
                } else if (winner === 'player') {
                    wallet += this.state.currentBet * 2;
                    message = 'You win!';
                } else if (dealerWinCount >= playerWinCount) {
                    message = 'Dealer wins...';
                } else {
                    wallet += this.state.currentBet * 2;
                    message = 'You win!';
                }
                let whoWonCount = '';
                message === 'You win!' ? whoWonCount = 'playerWinCount' : whoWonCount = 'dealerWinCount';
                this.setState({
                    deck,
                    dealer,
                    wallet,
                    gameOver: true,
                    message,
                    [whoWonCount]: [this.state.whoWonCount] + 1
                });
            }
        } else {
            this.setState({ message: 'Game over! Please start a new game.' });
        }
    }

    inputChange(e) {
        const inputValue = +e.target.value;
        const firstDigitStr = String(inputValue)[0];
        if ((firstDigitStr != 0)) this.setState({ inputValue });
    }

    render() {
        const { dealer, player, currentBet, inputValue, message, gameOver, wallet, deck } = this.state;
        if (!deck) return <Loader />
        return (
            <div className="game" style={{ backgroundImage: `url(${BackGround})` }}>
                <main className="game-container flex align-center column">
                    <h1>BlackJack</h1>
                    <p className="wallet">Wallet: ${wallet}</p>
                    <div className="game-buttons">
                        {
                            gameOver ?
                                <div >
                                    <button onClick={() => { this.startNewGame() }}>Continue</button>
                                </div>
                                : !currentBet ?
                                    <div className="input-bet">
                                        <form>
                                            <input type="number" placeholder="Enter Your Bet" value={inputValue} onChange={this.inputChange.bind(this)} />
                                        </form>
                                        <button onClick={() => { this.placeBet() }}>Place Bet</button>
                                    </div>
                                    : <div className="bet-message">This Round Bet ${currentBet}
                                        <button onClick={() => { this.hit() }}>Hit</button>
                                        <button onClick={() => { this.stand() }}>Stand</button>
                                    </div>
                        }
                    </div>
                    <h2>Dealer's Cards ({dealer.count})</h2>
                    <div className="dealer flex">
                        {dealer.cards.map((card, i) => {
                            return <Card key={i} number={card.number} suit={card.suit} />
                        })}
                    </div>
                    <h2>Your Cards  ({player.count})</h2>
                    <div className="player flex">
                        {player.cards.map((card, i) => {
                            return <Card key={i} number={card.number} suit={card.suit} />
                        })}
                    </div>
                    <div className="message-container">{message}</div>
                </main>
            </div>
        );
    }
}

export default BlackJack;
