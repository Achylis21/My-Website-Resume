import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Homepage from './Components/Homepage.jsx';
import Experience from './Components/Experience.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// MAKE A FOOTER FOR COPYRIGHT, SOME OF THE SVG (ICONS, IMAGE, ETC.) ARE FROM FREEPIK
//SKILLS ICON 
//<a target="_blank" href="https://icons8.com/icon/13679/java">java logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Experience' element={<Experience/>}/>
      </Routes>
      
    </React.Fragment>
  );
}

export default App;
