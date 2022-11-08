import { useState } from 'react';

import '../styles/App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [newGame, setNewGame] = useState(true);

  const [stats] = useState({
    mode: '',
    level: 1,
    score: 0,
    highscore: 0,
  });

  const handleNewGame = () => {
    setNewGame(false);
  };

  return (
    <div className="App">
      <Header newGame={newGame} stats={stats} />
      <Main newGame={newGame} handleNewGame={handleNewGame} />
      <Footer />
    </div>
  );
}

export default App;
