import { useEffect, useState } from 'react';

import '../styles/App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import levels from '../utils/levels';

function App() {
  const [stats, setStats] = useState({
    state: 'newgame', // newgame, playing, lose, win
    mode: 'easy', // easy, normal, hard
    level: 1,
    score: 0,
    highscore: 0,
  });

  useEffect(() => {
    console.log(levels[stats.mode][stats.level]);
    if (
      stats.score === levels[stats.mode][stats.level].required &&
      stats.level < 3
    ) {
      setStats((prevState) => ({
        ...prevState,
        level: prevState.level + 1,
      }));
    } else if (
      stats.score === levels[stats.mode][stats.level].required &&
      stats.level === 3
    ) {
      // handleWin();
    }
  }, [stats.score, stats.mode, stats.level]);

  const handleNewGame = (mode) => {
    setStats((prevState) => ({
      ...prevState,
      state: 'playing',
      mode,
      level: 1,
      score: 0,
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

  const handleLose = () => {
    setStats((prevState) => ({
      ...prevState,
      state: 'lose',
    }));
  };

  return (
    <div className="App">
      <Header stats={stats} />
      <Main
        handleNewGame={handleNewGame}
        stats={stats}
        handleScore={handleScore}
        handleLose={handleLose}
      />
      <Footer />
    </div>
  );
}

export default App;
