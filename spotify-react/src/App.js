import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MyNavbar from './components/MyNavbar';
import MySideBar from './components/MySideBar';

function App() {
  return (
    <div className="App">
     <MyNavbar />
     <MySideBar/>
    </div>
  );
}

export default App;
