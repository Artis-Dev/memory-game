import { useState } from 'react';

import '../styles/App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [newGame, setNewGame] = useState(true);

  const [stats, setStats] = useState({
    mode: '',
    level: 1,
    score: 0,
    highscore: 0,
  });

  const handleNewGame = (mode) => {
    setNewGame(false);
    setStats((prevState) => ({
      ...prevState,
      mode,
    }));
  };

  const handleScore = () => {
    setStats((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));
    setStats((prevState) => ({
      ...prevState,
      highscore:
        prevState.highscore < prevState.score
          ? prevState.score
          : prevState.highscore,
    }));
  };

  return (
    <div className="App">
      <Header newGame={newGame} stats={stats} />
      <Main
        newGame={newGame}
        handleNewGame={handleNewGame}
        stats={stats}
        handleScore={handleScore}
      />
      <Footer />
    </div>
  );
}

export default App;
