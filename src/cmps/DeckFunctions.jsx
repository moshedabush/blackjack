export function generateDeck() {
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
export function  dealCards(deck){
    const playerCard = getRandomCard(deck);
    const dealerCard = getRandomCard(playerCard.updatedDeck);
    return {updatedDeck:dealerCard.updatedDeck , player:playerCard.randomCard, dealer:dealerCard.randomCard}
}

export function  getRandomCard(deck) {
    const updatedDeck = deck;
    const randomIndex = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[randomIndex];
    updatedDeck.splice(randomIndex, 1);
    return { randomCard, updatedDeck };
}