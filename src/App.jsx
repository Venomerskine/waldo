import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/home/home.jsx'
import Leaderboard from './pages/leaderboard/leaderboard.jsx'
import Game from './pages/game/game.jsx'

function App() {
  

  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/game">Game</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
