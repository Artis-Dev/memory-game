import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../styles/CardList.css';

import levels from '../utils/levels';
import cards from '../utils/cards';
import { createDeck, shuffleDeck } from '../utils/deckUtils';

import Card from './Card';

function CardList(props) {
  const { stats, handleScore, handleEndGame } = props;

  const [deck, setDeck] = useState([]);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();

        loadImg.src = image.image;
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(cards.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log('Failed to load images', err));
  }, []);

  useEffect(() => {
    setDeck(createDeck(cards, levels[stats.mode][stats.level].cards));
  }, [stats.mode, stats.level]);

  const handleCardClick = (e) => {
    shuffleDeck(deck);
    setDeck(
      deck.map((card) => {
        if (e.target.parentElement.getAttribute('data-key') === card.id) {
          if (!card.isClicked) {
            handleScore();
            return {
              ...card,
              isClicked: true,
            };
          }
          handleEndGame('lose');
        }
        return card;
      }),
    );
  };

  return (
    <div className="CardList">
      {imgsLoaded ? (
        deck.map((card) => {
          return (
            <Card key={card.id} card={card} handleClick={handleCardClick} />
          );
        })
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
}

CardList.propTypes = {
  stats: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  handleScore: PropTypes.func.isRequired,
  handleEndGame: PropTypes.func.isRequired,
};

export default CardList;
