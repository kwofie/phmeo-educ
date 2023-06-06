import './App.css';
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import  './components/Login/Login.css';
import Dashboard from './components/Dashboard/Dashboard';
import './components/Dashboard/dashboard.css'
// import DigitalClock from './components/Clock/DigitalClock';
import {
  BrowserRouter, Route,
  Routes,
} from "react-router-dom";


// THE ROUTER DOM

function App() {
  return (
<BrowserRouter>

  <Routes>
      <Route path="/Login" element={<Login/>}></Route>   
      <Route path="/Navbar" element={<Navbar/>}></Route> 
      <Route path="/Dashboard" element={<Dashboard/>}></Route> 
    </Routes>
    </BrowserRouter>

  );
}

export default App;
