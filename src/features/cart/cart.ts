import { createStructuredSelector } from 'reselect';

interface Action {
  type: string;
  data: any;
}

export const NAME = 'cart';

// Actions
const ADD_TO_CART = '[cart]/ADD_TO_CART';
const REMOVE_ONE_FROM_CART = '[cart]/REMOVE_ONE_FROM_CART';
const REMOVE_ALL_FROM_CART = '[cart]/REMOVE_ALL_FROM_CART';
const CLEAR_CART = '[cart]/CLEAR_CART';

export const actionTypes = {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
};

// InitialState
const initialState = {
  products: [],
  dataCart: [],
};

// Reducer
export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return { ...state };
    case actionTypes.REMOVE_ONE_FROM_CART:
      return { ...state };
    case actionTypes.REMOVE_ALL_FROM_CART:
      return { ...state };
    case actionTypes.CLEAR_CART:
      return { ...state };
    default:
      return state;
  }
}

const list = () => ({ type: ADD_TO_CART });
export const actionsCreators = {
  list,
};

const cart = (state: any) => state[NAME];
export const selector = createStructuredSelector({
  cart,
});
