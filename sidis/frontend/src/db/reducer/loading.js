import { LOADING_PROGRESS, LOADING_SUCCESS } from '../actionTypes/loading';

const initialState = {
  items: {},
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_PROGRESS :
      return {
        ...state,
        items: { isLoading : true },
      };

    case LOADING_SUCCESS :
      return {
        ...state,
        items: { isLoading : false },
      };

    default:
      return state;
  }
}
