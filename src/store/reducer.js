const initialState = {
  counter: 0
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
      results: state.results.concat(state.counter)
    };
  }
  if (action.type === "DELETE_RESULT") {
    return {
      ...state,
      results: state.results.concat(state.counter)
    };
  }
  return state;
};

export default reducer;