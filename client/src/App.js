import './App.css';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import PlayerStatus from './components/PlayerStatus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h3 className='nav-links'><Link to={'/players/list'} className='link-color me-2'>Manage Players</Link> | <Link to={'/status/game/1'} className='link-color ms-2'>Manage Player Status</Link></h3>
        <Routes>
          <Route path='/' element={<Link to={'/players/list'} />} />
          <Route path='/players/list' element={<PlayerList/>} default />
          <Route path='/players/addplayer' element={<AddPlayer/>} />
          <Route path='/status/game/:gameId' element={<PlayerStatus/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
