import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MyNavbar from './components/MyNavbar';
import MySideBar from './components/MySideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumPage from './components/AlbumPage';
import ArtistPage from "./components/ArtistPage";
import HomePage from './components/HomePage';
import Player from './components/Player';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
      <MyNavbar />
     <MySideBar/> 
     <Routes>
       <Route path="/" element={<SearchPage />} />
       <Route path="/album-page/:id" element={<AlbumPage />} />
       <Route path="/artist-page/:id" element ={<ArtistPage />} />
       <Route path="/home-page" element={<HomePage />} />
     </Routes>
     <Player /> 
     </BrowserRouter>
    </div>
  );
}

export default App;
