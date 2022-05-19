import { useState } from 'react';
import './App.css';
import Parade from './Parade.js';
import OpenSign from './OpenSign.js';

function App() {
  const [kenanandkel, setKenanandkelsize] = useState(10);
  const [catdog, setCatdogsize] = useState(10);
  const [animals, setAnimal] = useState(['cat']);
  const [isOpen, setisOpen] = useState(false);

  const ATTACK = 1;

  return (
    <div className="App">
      <div className="fight">
        <div className="monster">
          <img src="catdog.png" style={{ width: catdog * 10 }} />
          <div className="button">
            <button className="button" onClick={() => setCatdogsize(catdog + ATTACK)}>
              CatDog did some good deeds!
            </button>
            <button className="button" onClick={() => setCatdogsize(catdog - ATTACK)}>
              CatDog was sassy to the animals today.
            </button>
          </div>
        </div>

        <div className="monster">
          <img src="kenanandkel.png" style={{ width: kenanandkel * 10 }} />
          {/* <div className="button"> */}
          <button className="button" onClick={() => setKenanandkelsize(kenanandkel + ATTACK)}>
            Kenan Kel didnt poison the animals
          </button>
          <button className="button" onClick={() => setKenanandkelsize(kenanandkel - ATTACK)}>
            Kenan and Kel did poison some animals by mistake.
          </button>
          {/* </div> */}
        </div>
      </div>
      <div className="verbage">
        <OpenSign isOpen={isOpen} />
        <h1 className="sign">Welcome to the 90s Zoo! </h1>
        <h2 className="sign">Maintained by your fav 90s all stars!</h2>
        <div className="button">
          <button className="button" onClick={() => setisOpen(true)}>
            Open Zoo!
          </button>
          <button className="button" onClick={() => setisOpen(false)}>
            Close Zoo!
          </button>
        </div>
      </div>

      <div className="animalparade">
        <Parade animalsEl={animals} />
        <div className="button">
          <button
            className="button"
            onClick={() => {
              animals.push('cat');
              setAnimal([...animals]);
            }}
          >
            {' '}
            Add Cat{' '}
          </button>
          <button
            className="button"
            onClick={() => {
              animals.push('dog');
              setAnimal([...animals]);
            }}
          >
            Add Dog
          </button>
          <button
            className="button"
            onClick={() => {
              animals.push('bear');
              setAnimal([...animals]);
            }}
          >
            Add Bear
          </button>
          <button
            className="button"
            onClick={() => {
              animals.push('moose');
              setAnimal([...animals]);
            }}
          >
            Add Moose
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
