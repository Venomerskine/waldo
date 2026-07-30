import {  Link } from 'react-router-dom';

function Header () {
    return (
        <header>
            <h1>My App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <Link to="/game">Game</Link>
            </nav>
        </header>
    );
}

export default Header;