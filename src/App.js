import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  let currentColor = 'red'

  const red = useRef(null)
  const yellow = useRef(null)
  const green = useRef(null)

  function setColor (el, active) {
    el.current.style.opacity = active ? 1 : 0.3;
  }

  useEffect(() =>{
    setColor(red, true)
  })

  function ChangeColor () {
    if(currentColor == 'red') {
      currentColor = 'yellow'
      setColor(red, false)
      setColor(yellow, true)
      setColor(green, false)
    }else if(currentColor == 'yellow'){
      currentColor = 'green'
      setColor(red, false)
      setColor(yellow, false)
      setColor(green, true)
    }else if(currentColor == 'green'){
      currentColor = 'red'
      setColor(red, true)
      setColor(yellow, false)
      setColor(green, false)
    }
  }

  return (
    <>
      <main>
        <div className='Tlight'>
          <div ref={red} className='Dsize' id='red'></div>
          <div ref={yellow} className='Dsize' id='yellow'></div>
          <div ref={green} className='Dsize' id='green'></div>
        </div>
        <button onClick={ChangeColor}>Change Color</button>
      </main>
    </>
  );
}

export default App;
