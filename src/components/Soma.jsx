import React from 'react';
import Card from './Card';

export default () => {
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  );
};
