import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Sorteio(props) {
  const { min, max } = props;
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
}

function mapStateProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateProps)(Sorteio);
