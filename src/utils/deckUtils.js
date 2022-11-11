const createDeck = (deck, numberOfCards) => {
  const newDeck = [];
  for (let i = 0; i < numberOfCards; ) {
    const random = Math.floor(Math.random() * deck.length);
    if (newDeck.indexOf(deck[random]) === -1) {
      newDeck.push(deck[random]);
      i += 1;
    }
  }
  return newDeck;
};

const shuffleDeck = (deck) => {
  const shuffledDeck = deck;
  let m = deck.length;
  let t;
  let i;
  while (m) {
    i = Math.floor(Math.random() * (m -= 1));
    t = deck[m];
    shuffledDeck[m] = deck[i];
    shuffledDeck[i] = t;
  }
  return shuffledDeck;
};

export { createDeck, shuffleDeck };
