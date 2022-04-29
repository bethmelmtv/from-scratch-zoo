import logo from './logo.svg';
import './App.css';
import AnimalEmoji from './AnimalEmoji.js';
import Parade from './Parade.js';
import OpenSign from './OpenSign.js';
import { animals } from './data.js';
import { useState } from 'react';


function App() {

  const [kenanandkel, setKenanandkelsize] = useState(10);
  const [catdog, setCatdogsize] = useState(10);
  const [animals, setAnimal] = useState(['cat']);
  const [isOpen, setisOpen] = useState(false);

  const ATTACK = 1;

  return (

    <div className="App">

      <div className='catdog'>
        <img src="catdog.png" style={{ width: catdog * 10 }} />
        <div className="buttons" />
        <button onClick={() => setCatdogsize(catdog + ATTACK)}>CatDog did some good deeds!</button>
        <button onClick={() => setCatdogsize(catdog - ATTACK)}>CatDog was sassy to the animals today.</button>
      </div>

      <div className='kenanandkel'>
        <img src="kenanandkel.png" style={{ width: kenanandkel * 10 }} />
        <div className="buttons" />
        <button onClick={() => setKenanandkelsize(kenanandkel + ATTACK)}>Kenan Kel didnt poison the animals</button>
        <button onClick={() => setKenanandkelsize(kenanandkel - ATTACK)}>Kenan and Kel did poison some animals by mistake.</button>
      </div>

  
      <div className='sign'>
        <OpenSign isOpen= {isOpen} />
        <div className="buttons">
          <h1>Welcome to the 90s Zoo! </h1>
          <h2>Maintained by your fav 90s all stars!</h2>
          <buttton onClick={() => setisOpen(true)}>Open Zoo!</buttton>
          <button onClick={() => setisOpen(false)}>Close Zoo!</button>
        </div>
      </div>

      <div className='animalparade'>
        <div className="buttons" />
        <button onClick={() => setAnimal(...animals)}>Add Cat</button>
        <button onClick={() => setAnimal(...animals)}>Add Dog</button>
        <button onClick={() => setAnimal(...animals)}>Add Bear</button>
        <button onClick={() => setAnimal(...animals)}>Add Moose</button>
      </div>
    </div>
  );
}

export default App;
