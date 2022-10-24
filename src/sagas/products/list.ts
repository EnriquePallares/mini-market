import { Product } from '@/types/entities';
import { call, put } from 'redux-saga/effects';
import { actionTypes as productActions } from '../../features/products';
import * as products from '@/assets/data/products.json';

export default function* tryProductList() {
  try {
    /* const URL = '@/assets/data/products.json';
    const response: Promise<Product[]> = yield call((url: string) => {
      return fetch(url, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => res.products)
        .catch(error => {
          throw error;
        });
    }, URL); */

    yield put({ type: productActions.LIST_SUCCESS, data: products.products });
  } catch (e) {
    yield put({ type: productActions.LIST_FAILED });
  }
}
