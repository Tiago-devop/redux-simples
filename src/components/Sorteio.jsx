import React from 'react';
import Card from './Card';

export default ({ min, max }) => {
  const randomNumber = parseInt(Math.random() * (max - min), 10) + min;
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{randomNumber}</strong>
        </span>
      </div>
    </Card>
  );
};
