import React, { Component } from 'react'
// conectar o componente a store
import { connect } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import { bindActionCreators } from 'redux'
import { ProductList } from './styles'
import * as CartAction from '../../store/modules/cart/actions'
import api from '../../services/api'
import { formatPrice } from '../../util/format'

class Home extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await api.get('products')

    // para não chamar toda vez a função formatPrice no render
    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }))

    this.setState({ products: data })
  }

  handleAddProduct = (product) => {
    // A partir do momento que conectamos o componente com redux
    // com o connect, recebemos a props dispatch
    // para disparar uma action ao redux
    // const { dispatch } = this.props
    // disparando direto
    // dispatch({
    //   type: 'ADD_TO_CART',
    //   product,
    // })
    // disparando a action
    // dispatch(CartAction.addToCart(product))
    // depois de mapear com mapDispatchToProps
    const { addToCart } = this.props
    addToCart(product)
  }

  render() {
    const { products } = this.state
    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button onClick={() => this.handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    )
  }
}
// mapear actions do redux, em propriedades do componente
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartAction, dispatch)

export default connect(null, mapDispatchToProps)(Home)
