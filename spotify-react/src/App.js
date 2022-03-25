import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MyNavbar from './components/MyNavbar';
import MySideBar from './components/MySideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumPage from './components/AlbumPage';
import ArtistPage from "./components/ArtistPage";
import HomePage from './components/HomePage';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <MyNavbar />
     <MySideBar/>
     <Routes>
       <Route path="/homepage" element={<HomePage />} />
       <Route path="/album-page" element={<AlbumPage />} />
       <Route path="/artist-page" element ={<ArtistPage />} />
     </Routes>
     <MyFooter />
     </BrowserRouter>
    </div>
  );
}

export default App;
