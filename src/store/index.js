import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
// passar dentro do enhancer
// passar dentro do compose em dev env, já também é preciso passar a config do reactotron
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// integrar reactotron com redux
const enhancer =
  process.env.NODE_ENV === 'development'
    ? // compose: juntar várias configs
      compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
