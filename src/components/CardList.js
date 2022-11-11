import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../styles/CardList.css';

import levels from '../utils/levels';
import cards from '../utils/cards';
import { createDeck, shuffleDeck } from '../utils/deckUtils';

import Card from './Card';

function CardList(props) {
  const { stats, handleScore, handleLose } = props;

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    setDeck(createDeck(cards, levels[stats.mode][stats.level]));
  }, [stats.mode, stats.level]);

  useEffect(() => {
    shuffleDeck(deck);
  }, [deck, stats.score]);

  const handleCardClick = (e) => {
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
          handleLose();
        }
        return card;
      })
    );
  };

  return (
    <div className="CardList">
      {deck.map((card) => {
        return <Card key={card.id} card={card} handleClick={handleCardClick} />;
      })}
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
  handleLose: PropTypes.func.isRequired,
};

export default CardList;
