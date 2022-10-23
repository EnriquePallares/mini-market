import { takeLatest } from 'redux-saga/effects';
import { actionTypes as productActions } from '../features/products';
import tryProductList from './products/list';

export default function* rootSaga() {
  yield takeLatest(productActions.LIST_TRY, tryProductList);
}
