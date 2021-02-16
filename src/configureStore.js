import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import mainSaga from './sagas';

export const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(mainSaga);
  return store;
};


export default configureStore;
