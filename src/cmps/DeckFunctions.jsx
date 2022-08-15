export function generateDeck() {
    const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suits = ['♦', '♣', '♥', '♠'];
    const deck = [];
    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            deck.push({ number: cards[i], suit: suits[j] });
        }
    }
    return deck;
}

export function dealCards(deck) {
    const playerCard1 = getRandomCard(deck);
    const dealerCard1 = getRandomCard(playerCard1.updatedDeck);
    const playerCard2 = getRandomCard(dealerCard1.updatedDeck);
    const dealerStartingHand = [dealerCard1.randomCard, {}];
    const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];

    const player = {
        cards: playerStartingHand,
        count: getCount(playerStartingHand)
    };

    const dealer = {
        cards: dealerStartingHand,
        count: getCount(dealerStartingHand)
    };

    return { updatedDeck: playerCard2.updatedDeck, player, dealer };
}

export function getRandomCard(deck) {
    const updatedDeck = deck;
    const randomIndex = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[randomIndex];
    updatedDeck.splice(randomIndex, 1);
    return { randomCard, updatedDeck };
}

export function getCount(cards) {
    const rearranged = [];
    cards.forEach(card => {
        if (card.number === 'A') {
            rearranged.push(card);
        } else if (card.number) {
            rearranged.unshift(card);
        }
    });

    return rearranged.reduce((total, card) => {
        if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
            return total + 10;
        } else if (card.number === 'A') {
            return (total + 11 <= 21) ? total + 11 : total + 1;
        } else {
            return total + card.number;
        }
    }, 0);
}