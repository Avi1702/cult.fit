import React from 'react';
import './App.css';
import './styles/myHome.css'
// import { Navbar } from './pages/Navbar';
// import { Home } from './pages/myHome';
import { Navbar } from './components/Navbar';
// import Fitness from './pages/Fitness/Fitness.jsx';
import { Pages } from './pages/Pages';
import {Footer} from './components/Footer'
// import Fintess from './pages/Fitness/Fitness';

function App() {
  
  return (
    <div className='App'>
     <Navbar/>
     <Pages/>
     <Footer/>
    
     {/* <Fitness></Fitness> */}
    </div>
  );
}

export default App;