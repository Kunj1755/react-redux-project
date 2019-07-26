import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
// Now we have 2 reducers
// import reducer from "./store/reducer";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import { Provider } from "react-redux";

// This takes a reducer as an input.
/*
 We will have more complex reducers in our application with lot of code for different
 types of actions, so we typically store their logics into their own files

*/
/* We are telling redux that we got 2 feature areas in our application res and ctr, Use the 
reducers for each of them. Merge all of them into obe store, state and reducer.
*/
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
})
//Pass rootReducer to store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
