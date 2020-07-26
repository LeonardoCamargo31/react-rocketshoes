// quando chamamos o dispatch todos os reducers são ativados
// então preciso saber qual chamar, com o switch
export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product]
    default:
      return state
  }
}

// no momento que ele alterou a store, o redux avisa todos componentes
// que usam o connect e usam o state.cart
// assim nosso componente através do connect atualiza os valores
