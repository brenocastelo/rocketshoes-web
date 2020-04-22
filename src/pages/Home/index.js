import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { addToCartRequest } from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../utils/formats';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const productAmount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;

      return amount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      /**
       * fazer formatação logo que buscar os dados da api para evitar que funções
       * de formatação estando dentro do render seja executadas de forma desnecessária
       * */
      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button
            type="button"
            onClick={() => dispatch(addToCartRequest(product.id))}
          >
            <div>
              <MdAddShoppingCart />
              {productAmount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
