import AnimalEmoji from './AnimalEmoji.js';
import React from 'react';

export default function Parade({ animalsEl }) {
  return (
    <div className="animals">
      {animalsEl.map((animal, i) => (
        <AnimalEmoji key={animal + i} animal={animal} />
      ))}
    </div>
  );
}
