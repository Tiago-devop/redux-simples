// Action Creator
// eslint-disable-next-line import/prefer-default-export
export function alterarNumeroMinimo(novoNumero) {
  return {
    type: 'NUM_MIN_ALTERADO',
    payload: novoNumero,
  };
}
