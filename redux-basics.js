// Node style of import
const redux = require("redux");
// createStore is a function, but do not execute it yet
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer
// state -->  current state
// Function has to return the updated state
// 'state = initialState' --> Take initialState when state in undefined
const rootReducer = (state = initialState, action) => {
  if (action === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state; // just returning the current state
};

// Store

const store = createStore(rootReducer);
console.log(store.getState()); //{ counter: 0 }
/* 
A store needs to be initialized with a reducer.
We have one reducer even if we combine multiple ones, they will be merged into one.
Reducer is strongly connected to the store. it is the only thing that can update the state.
We need to pass  reducer in the common function above.
*/

// Subscription
/*
subscription makes sure that you do not have to call getState() manually.
It will inform when do I need to get state.
the code inside subscribe will be exceuted whenever action is dispatched or state is changed.
*/
store.subscribe(() => {
  console.log("[subscription]", store.getState());
});

// Dispatching Action
// You have to pass 'type' property and the value has to be in uppper case.

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
