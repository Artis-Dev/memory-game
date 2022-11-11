import { useState } from 'react';

import '../styles/App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [stats, setStats] = useState({
    state: 'newgame', // newgame, playing, lose, win
    mode: '',
    level: 1,
    score: 0,
    highscore: 0,
  });

  const handleNewGame = (mode) => {
    setStats((prevState) => ({
      ...prevState,
      state: 'playing',
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
      <Header stats={stats} />
      <Main
        handleNewGame={handleNewGame}
        stats={stats}
        handleScore={handleScore}
      />
      <Footer />
    </div>
  );
}

export default App;
