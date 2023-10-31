import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Homepage from './Components/Homepage.jsx';
import './App.css';


// MAKE A FOOTER FOR COPYRIGHT, SOME OF THE SVG (ICONS, IMAGE, ETC.) ARE FROM FREEPIK
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Homepage/>
    </React.Fragment>
  );
}

export default App;
