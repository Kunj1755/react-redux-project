import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    return {
      ...state,
      counter: state.counter + action.val
    };
  }
  if (action.type === actionTypes.STORE_RESULT) {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter })
    };
  }
  if (action.type === actionTypes.DELETE_RESULT) {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return {
      ...state,
      results: updatedArray
    };
  }

  return state;
};

export default reducer;
