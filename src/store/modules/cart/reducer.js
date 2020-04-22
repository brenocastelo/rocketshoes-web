// immer: lidar com objetos e arrays que são imutáveis
import { produce } from 'immer';

export default function cart(state = [], action) {
  /**
   * state: estado anterior à alteração
   * action: action disparada com dados para alteração no estado
   * */
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(action.product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = action.amount;
        }
      });
    }
    default:
      return state;
  }
}
