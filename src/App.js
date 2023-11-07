import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Homepage from './Components/Homepage.jsx';
import './App.css';


// MAKE A FOOTER FOR COPYRIGHT, SOME OF THE SVG (ICONS, IMAGE, ETC.) ARE FROM FREEPIK
//SKILLS ICON 
//<a target="_blank" href="https://icons8.com/icon/13679/java">java logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Homepage/>
    </React.Fragment>
  );
}

export default App;
