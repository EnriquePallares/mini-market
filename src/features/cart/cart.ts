import { createStructuredSelector } from 'reselect';

interface Action {
  type: string;
  data: any;
}

export const NAME = 'cart';

// Actions
const LIST_TRY = '[cart]/LIST_TRY';
const LIST_SUCCESS = '[cart]/LIST_SUCCESS';
const LIST_FAILED = '[cart]/LIST_FAILED';

export const actionTypes = {
  LIST_TRY,
  LIST_FAILED,
  LIST_SUCCESS,
};

// InitialState
const initialState = {
  dataCart: [],
};

// Reducer
export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.LIST_TRY:
      return { ...state };
    case actionTypes.LIST_FAILED:
      return { ...state };
    case actionTypes.LIST_SUCCESS:
      return { ...state, dataCart: action?.data };
    default:
      return state;
  }
}

const list = () => ({ type: LIST_TRY });
export const actionsCreators = {
  list,
};

const cart = (state: any) => state[NAME];
export const selector = createStructuredSelector({
  cart,
});
