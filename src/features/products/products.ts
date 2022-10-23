import { createStructuredSelector } from 'reselect';

interface Action {
  type: string;
  data: any;
}

export const NAME = 'products';

// Actions
const LIST_TRY = '[products]/LIST_TRY';
const LIST_SUCCESS = '[products]/LIST_SUCCESS';
const LIST_FAILED = '[products]/LIST_FAILED';

export const actionTypes = {
  LIST_TRY,
  LIST_FAILED,
  LIST_SUCCESS,
};

// InitialState
const initialState = {
  dataProducts: [],
};

// Reducer
export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.LIST_TRY:
      return { ...state };
    case actionTypes.LIST_FAILED:
      return { ...state };
    case actionTypes.LIST_SUCCESS:
      return { ...state, dataProducts: action?.data };
    default:
      return state;
  }
}

const list = () => ({ type: LIST_TRY });
export const actionsCreators = {
  list,
};

const products = (state: any) => state[NAME];
export const selector = createStructuredSelector({
  products,
});
