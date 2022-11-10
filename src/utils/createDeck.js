const createDeck = (array, numberOfCards) => {
  const newDeck = [];
  for (let i = 0; i < numberOfCards; ) {
    const random = Math.floor(Math.random() * array.length);
    if (newDeck.indexOf(array[random]) === -1) {
      newDeck.push(array[random]);
      i += 1;
    }
  }
  return newDeck;
};

export default createDeck;
