import '../styles/Header.css';

import Stats from './Stats';

function Header() {
  return (
    <header className="Header">
      <h1>Memory Game</h1>
      <Stats />
    </header>
  );
}

export default Header;
