class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }

    render(imgSrc) {
        const cardDisplay = document.createElement('section');
        cardDisplay.classList.add('card');

        const cardRank = document.createElement('h2');
        cardRank.classList.add('rank');
        cardRank.textContent = this.rank;
        cardDisplay.append(cardRank);

        const suitImage = document.createElement('img');
        suitImage.src = imgSrc;
        cardDisplay.append(suitImage);

        return cardDisplay;
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
        if (!cardsHand.includes(card)) return null;
        this.cardsHand.pop(card)
    }
}
class Deck {
    constructor(arrayCardRanks, arrayCardSuits) {
        this.arrayCardRanks = arrayCardRanks;
        this.arrayCardSuits = arrayCardSuits;
        this.cardsDeck = this.generateCards();
        }

    generateCards() {
        let deck = [];
        for (let i=0; i<this.arrayCardRanks.length; i++) {
            let currentRank = this.arrayCardRanks[i];
            for (let j=0; j<this.arrayCardSuits.length; j++) {
                let currentSuit = this.arrayCardSuits[j];
                let card = new Card(currentRank,currentSuit);
                deck.push(card);
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
        return this.cardsDeck.pop(); 
    }

    deal(numHands, cardsPerHand) {
        let hands = [];
        for (let i = 0; i < numHands; i++) {
            console.log('hands loop')
            let hand = new Hand([]);
            for (let j = 0; j < cardsPerHand; j++) {
                console.log('hand loop')
                hand.addCard(this.draw());
            }
            hands.push(hand);
        }

        return hands;
    }
}

const arrayCardRanks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const arrayCardSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']