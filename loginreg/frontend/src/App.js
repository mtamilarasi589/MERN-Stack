import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
