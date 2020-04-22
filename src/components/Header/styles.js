import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  margin: 50px 0;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      /** faz com que o elemento seguinte vá para próxima linha */
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
