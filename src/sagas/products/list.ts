import { Product } from '@/types/entities';
import { call, put } from 'redux-saga/effects';
import { actionTypes as productActions } from '../../features/products';

export default function* tryProductList() {
  try {
    const URL = '/src/assets/data/products.json';
    const response: Promise<Product[]> = yield call((url: string) => {
      return fetch(url, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => res.products)
        .catch(error => {
          throw error;
        });
    }, URL);

    yield put({ type: productActions.LIST_SUCCESS, data: response });
  } catch (e) {
    yield put({ type: productActions.LIST_FAILED });
  }
}
