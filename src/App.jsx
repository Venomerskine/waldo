import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home/home.jsx'
import Leaderboard from './pages/leaderboard/leaderboard.jsx'
import Game from './pages/game/game.jsx'
import MainLayout from './components/layout/mainLayout.jsx';
import User from './pages/home/user.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<User />} />
        <Route element={<MainLayout/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/game/:sceneId/:data" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
