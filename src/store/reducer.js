const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + action.val
    };
  }
  if (action.type === "STORE_RESULT") {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter })
    };
  }
  if (action.type === "DELETE_RESULT") {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return {
      ...state,
      results: updatedArray
    };
  }

  return state;
};

export default reducer;
