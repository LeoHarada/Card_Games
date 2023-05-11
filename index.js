class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }
}

class Hand {
    constructor(cardsHand) {
        this.cardsHand = cardsHand;
    }
    addCard(card) {
        this.cardsHand.push(card);
    }

    playCard(card) {
        if (!cardsHand.includes(card)) {
        return null;
    }
        this.cardsHand.pop(card)
    }
}
class Deck {
    constructor(arrayCardRanks, arrayCardSuits) {
        this.arrayCardRanks = arrayCardRanks;
        this.arrayCardSuits = arrayCardSuits;
        this.cardsDeck = [];
        }

    generateCards() {
        let deck = [];
        for (let i=0; i<this.arrayCardRanks.length; i++) {
            let currentRank = this.arrayCardRanks[i];
            for (let j=0; j<this.arrayCardSuits.length; j++) {
                let currentSuit = this.arrayCardSuits[j];
                deck.push(currentRank + currentSuit);
            }
        }
        return deck;
    }

    shuffleCards() {
        for (let i = this.cardsDeck.length - 1; i > 0; i--) {
            let currentIndex = i;
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            [this.cardsDeck[currentIndex], this.cardsDeck[randomIndex]] = [this.cardsDeck[randomIndex], this.cardsDeck[currentIndex]];
            }
        }

    draw() {
        this.cardsDeck.pop(); 
    }

    deal(numHands, cardsPerHand) {
        let hands = [];
        for (i = 0; i < numHands.length; i++) {
            let hand = [];
            for (j = 0; j < cardsPerHand.length; j++) {
                hand.push(this.draw());
            }
            hands.push(hand);
            hand = [];
        }
    }
}

const arrayCardRanks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const arrayCardSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
