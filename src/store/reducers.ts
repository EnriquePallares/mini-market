import { combineReducers } from 'redux';
import productReducer, { NAME as productName } from '../features/products';
import cartReducer, { NAME as cartName } from '../features/cart';

export default () =>
  combineReducers({
    [productName]: productReducer,
    [cartName]: cartReducer,
  });
