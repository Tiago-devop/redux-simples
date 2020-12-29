/* eslint-disable no-console */
/* eslint-disable func-names */
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numeros: function (state, action) {
    console.log('Reducer Numeros...');
    console.log(state, '', action);
    return {
      min: 7,
      max: 31,
    };
  },
  nomes: function (state, action) {
    console.log('Reducer Numeros...');
    console.log(state, '', action);
    return ['Maria', 'Juca', 'Carlos'];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
