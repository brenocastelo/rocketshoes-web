import { combineReducers } from 'redux';

import cart from './cart/reducer';

// usar combineReducers para usar múltiplos reducers
export default combineReducers({
  cart,
});
