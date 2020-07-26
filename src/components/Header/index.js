import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { connect } from 'react-redux'
import { Container, Cart } from './styles'
import Logo from '../../assets/images/logo.svg'

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  )
}

// recebe o state do redux e retorno as informações
// que quero acessar dentro do meu componente
const mapStateToProps = (state) => ({
  cartSize: state.cart.length, // state.cart => nome do meu reducer
})

export default connect(mapStateToProps)(Header)
