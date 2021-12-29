import { useState } from 'react'

const gift = [
  'CPU 19',
  'RAM 32GB',
  'RGB LED'
]

function App() {


  const [gifts, setGift] = useState()

  function randomGift() {
    const index = Math.floor(Math.random() * gift.length);
    setGift(gift[index]) 
  }



  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{ gifts || 'Is empty?' }</h1>
      <button onClick={randomGift}> Save Gift </button>
    </div>
  );
}

export default App;
