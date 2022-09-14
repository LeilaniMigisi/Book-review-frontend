import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Books from './components/Books/Books'
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>

      <Routes>

       <Route path='/' element={<Home />}/>
       <Route path='About' element={<About />}/>
       <Route path='Contact' element={<Contact />}/>
       < Route path='Reviews' element={<Reviews />}/>
       <Route path='add' element={<Reviews />}/>
       <Route path='Books' element={<Books />}/>
      
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;

