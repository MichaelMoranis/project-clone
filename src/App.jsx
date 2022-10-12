import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Central from './components/Central-Banner'
import OutDoor from './components/Outdoor'
import NavigationMenuDemo from './components/Menu'
import "./App.css"

function App() {
  const [activeColor, setactiveColor] = useState(false);
  const [Color, setColor] = useState(false);

  useEffect(() => {
    function positionScroll() {
      if(window.scrollY > 40){
         setactiveColor(true);  
         setColor(true);
      } else {
        setactiveColor(false);
        setColor(false);
      }
    }
    window.addEventListener("scroll", positionScroll);
  }, []);

  return (
    <div className="App">
      <Header 
      // action={activeColor} 
      // changeColor={Color}
      />
      <NavigationMenuDemo  />
      <Banner />
      <Central />
      <OutDoor />
    </div>
  )
}

export default App
