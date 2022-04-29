import AnimalEmoji from './AnimalEmoji.js';
import React from 'react';

export default function Parade({ animalsEl }) {
  return (
    <div className= 'animal'> 
      {animalsEl.map((animal) => <AnimalEmoji key={animal} animal={animal} />)}
    </div>
  );
}