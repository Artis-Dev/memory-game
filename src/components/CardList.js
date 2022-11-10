import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../styles/CardList.css';

import cards from '../utils/cards';
import createDeck from '../utils/createDeck';

import Card from './Card';

function CardList(props) {
  const { stats } = props;

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    if (stats.mode === 'easy') {
      if (stats.level === 1) {
        setDeck(createDeck(cards, 4));
      } else if (stats.level === 2) {
        setDeck(createDeck(cards, 8));
      } else if (stats.level === 3) {
        setDeck(createDeck(cards, 12));
      }
    } else if (stats.mode === 'normal') {
      if (stats.level === 1) {
        setDeck(createDeck(cards, 6));
      } else if (stats.level === 2) {
        setDeck(createDeck(cards, 12));
      } else if (stats.level === 3) {
        setDeck(createDeck(cards, 18));
      }
    } else if (stats.mode === 'hard') {
      if (stats.level === 1) {
        setDeck(createDeck(cards, 8));
      } else if (stats.level === 2) {
        setDeck(createDeck(cards, 16));
      } else if (stats.level === 3) {
        setDeck(createDeck(cards, 24));
      }
    }
  }, [stats.mode, stats.level]);

  return (
    <div className="CardList">
      {deck.map((card) => {
        return <Card image={card} />;
      })}
    </div>
  );
}

CardList.propTypes = {
  stats: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardList;
