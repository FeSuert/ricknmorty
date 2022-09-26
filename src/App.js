import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';
import { Route, Routes } from 'react-router-dom';
import Character from './pages/Character';
import Search from './pages/Search';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/:page" element={<CharactersList/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/character/:id" element={<Character/>}/>
      </Routes>
    </div>
  );
}

export default App;
