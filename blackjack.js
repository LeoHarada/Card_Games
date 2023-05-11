const cardValues = {
    'A': 11,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    'J': 10,
    'Q': 10,
    'K': 10,
}

class Game {
    constructor (player, dealer, gameOver=false) {
        this.player = player;
        this.dealer = dealer;
        this.gameOver = gameOver;
    }

    checkWin() {
        
        const x = Hand.cardsHand(Card.rank)
        return x

    }
}

const deal = document.querySelector("#deal");
deal.addEventListener('click', function() {
    const deck = new Deck(arrayCardRanks,arrayCardSuits);
    deck.shuffleCards();
    deck.deal(2,2)
    const card = d
})