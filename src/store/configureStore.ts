import rootSaga from '@/sagas/rootSaga';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';

export default function configureStore({ initialState }: any) {
  const composeEnhancers = compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return { store };
}
