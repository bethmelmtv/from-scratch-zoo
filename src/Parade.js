import AnimalEmoji from './AnimalEmoji.js';
import React from 'react';

export default function Parade({ animalsEl }) {
  return (
    <div className= 'animals'> 
      {animalsEl.map((animal) => <AnimalEmoji key={animal} animal={animal} />)}
    </div>
  );
}