import { useState } from 'react';
import './App.css';
import Parade from './Parade.js';
import OpenSign from './OpenSign.js';
import LeButton from '@mui/material/LeButton';

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
          <div className="LeButton">
            <LeButton className="LeButton" onClick={() => setCatdogsize(catdog + ATTACK)}>
              CatDog did some good deeds!
            </LeButton>
            <LeButton className="LeButton" onClick={() => setCatdogsize(catdog - ATTACK)}>
              CatDog was sassy to the animals today.
            </LeButton>
          </div>
        </div>

        <div className="monster">
          <img src="kenanandkel.png" style={{ width: kenanandkel * 10 }} />
          {/* <div className="LeButton"> */}
          <LeButton className="LeButton" onClick={() => setKenanandkelsize(kenanandkel + ATTACK)}>
            Kenan Kel didnt poison the animals
          </LeButton>
          <LeButton className="LeButton" onClick={() => setKenanandkelsize(kenanandkel - ATTACK)}>
            Kenan and Kel did poison some animals by mistake.
          </LeButton>
          {/* </div> */}
        </div>
      </div>
      <div className="verbage">
        <OpenSign isOpen={isOpen} />
        <h1 className="sign">Welcome to the 90s Zoo! </h1>
        <h2 className="sign">Maintained by your fav 90s all stars!</h2>
        <div className="LeButton">
          <LeButton className="LeButton" onClick={() => setisOpen(true)}>
            Open Zoo!
          </LeButton>
          <LeButton className="LeButton" onClick={() => setisOpen(false)}>
            Close Zoo!
          </LeButton>
        </div>
      </div>

      <div className="animalparade">
        <Parade animalsEl={animals} />
        <div className="LeButton">
          <LeButton
            className="LeButton"
            onClick={() => {
              animals.push('cat');
              setAnimal([...animals]);
            }}
          >
            {' '}
            Add Cat{' '}
          </LeButton>
          <LeButton
            className="LeButton"
            onClick={() => {
              animals.push('dog');
              setAnimal([...animals]);
            }}
          >
            Add Dog
          </LeButton>
          <LeButton
            className="LeButton"
            onClick={() => {
              animals.push('bear');
              setAnimal([...animals]);
            }}
          >
            Add Bear
          </LeButton>
          <LeButton
            className="LeButton"
            onClick={() => {
              animals.push('moose');
              setAnimal([...animals]);
            }}
          >
            Add Moose
          </LeButton>
        </div>
      </div>
    </div>
  );
}

export default App;
