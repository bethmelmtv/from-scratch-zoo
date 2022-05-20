import { useState } from 'react';
import './App.css';
import Parade from './Parade.js';
import OpenSign from './OpenSign.js';
import CustomButton from './CustomButton';

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

          <div className="CustomButton">
            <CustomButton
              className="CustomButton"
              onClick={() => setCatdogsize(catdog + ATTACK)}
              text="CatDog did some good deeds!"
            />
            <CustomButton className="CustomButton" onClick={() => setCatdogsize(catdog - ATTACK)}>
              CatDog was sassy to the animals today.
            </CustomButton>
          </div>
        </div>

        <div className="monster">
          <img src="kenanandkel.png" style={{ width: kenanandkel * 10 }} />
          {/* <div className="CustomButton"> */}

          <CustomButton
            className="CustomButton"
            onClick={() => setKenanandkelsize(kenanandkel + ATTACK)}
            text="Kenan Kel didnt poison the animals"
          />

          <CustomButton
            className="CustomButton"
            onClick={() => setKenanandkelsize(kenanandkel - ATTACK)}
          >
            Kenan and Kel did poison some animals by mistake.
          </CustomButton>

          {/* </div> */}
        </div>
      </div>

      <div className="verbage">
        <OpenSign isOpen={isOpen} />
        <h1 className="sign">Welcome to the 90s Zoo! </h1>
        <h2 className="sign">Maintained by your fav 90s all stars!</h2>
        <div className="CustomButton">
          <CustomButton className="CustomButton" onClick={() => setisOpen(true)}>
            Open Zoo!
          </CustomButton>
          <CustomButton className="CustomButton" onClick={() => setisOpen(false)}>
            Close Zoo!
          </CustomButton>
        </div>
      </div>

      <div className="animalparade">
        <Parade animalsEl={animals} />
        <div className="CustomButton">
          <CustomButton
            className="CustomButton"
            onClick={() => {
              animals.push('cat');
              setAnimal([...animals]);
            }}
          >
            {' '}
            Add Cat{' '}
          </CustomButton>
          <CustomButton
            className="CustomButton"
            onClick={() => {
              animals.push('dog');
              setAnimal([...animals]);
            }}
          >
            Add Dog
          </CustomButton>
          <CustomButton
            className="CustomButton"
            onClick={() => {
              animals.push('bear');
              setAnimal([...animals]);
            }}
          >
            Add Bear
          </CustomButton>

          <CustomButton
            className="CustomButton"
            onClick={() => {
              animals.push('moose');
              setAnimal([...animals]);
            }}
          >
            Add Moose
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default App;
