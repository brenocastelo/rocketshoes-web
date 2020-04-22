import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  // acessamos as infos dos estado do redux através de props fornecidas pelo connect

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>

        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

// conect pode receber alguns parâmetros, como uma função que retorna infos que o componente quer acessar
// state possui infos dos reducers
export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
