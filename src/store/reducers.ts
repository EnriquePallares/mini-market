import { combineReducers } from 'redux';
import productReducer, { NAME as productName } from '../features/products';

export default () =>
  combineReducers({
    [productName]: productReducer,
  });
