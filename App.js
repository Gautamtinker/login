import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dashborad from './Dashborad';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='/Dashboard' element={<Dashborad/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
