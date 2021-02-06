import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// My Middleware
const logger = (store) => {
    return next => {
        return action => {
            // Write the code here to be exceuted between action and reducer
            console.log('[Middleware] Dispatching', action);
            /* This will let action continue to the reducer, though for that 
               to succeed we need to pass 'action' as the argument.
            */
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;

        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Pass rootReducer to store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
