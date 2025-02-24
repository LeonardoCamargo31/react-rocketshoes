import produce from 'immer'

// antes do immer
// return [...state, { ...action.product, amount: 1 }]

// quando chamamos o dispatch todos os reducers são ativados
// então preciso saber qual chamar, com o switch
export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      // draft é uma cópia do state
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id)
        if (productIndex >= 0) {
          draft[productIndex].amount += 1
        } else {
          draft.push({ ...action.product, amount: 1 })
        }
      })
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id)
        if (productIndex >= 0) {
          // remove 1 produto a partir desse index
          draft.splice(productIndex, 1)
        }
      })

    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state
      }
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id)
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount)
        }
      })
    }
    default:
      return state
  }
}

// no momento que ele alterou a store, o redux avisa todos componentes
// que usam o connect e usam o state.cart
// assim nosso componente através do connect atualiza os valores
