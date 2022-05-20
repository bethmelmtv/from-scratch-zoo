import React from 'react';
 

export default function AnimalEmoji({ animal }) {
  return (
    <div className ='animal'>
      <p>{animal === 'cat' && '🐈'}</p>
      <p>{animal === 'dog' && '🐕'}</p>
      <p>{animal === 'bear' && '🐻'}</p>
      <p>{animal === 'moose' && '🦌'}</p>
    </div>
  );
}