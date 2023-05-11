const deal = document.querySelector("#deal");
deal.addEventListener('click', function() {
    const deck = new Deck(arrayCardRanks,arrayCardSuits);
    deck.shuffleCards();
    deck.deal(2,2)
    const card = d
})