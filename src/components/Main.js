import { useState } from 'react';

import '../styles/Main.css';

import Description from './Description';
import Button from './Button';

function Main() {
  const [newGame, setNewGame] = useState(true);

  const handleNewGame = () => {
    setNewGame(false);
  };

  return (
    <main className="Main">
      {newGame === true ? (
        <>
          <Description />
          <Button handleClick={handleNewGame} />
        </>
      ) : null}
    </main>
  );
}

export default Main;
