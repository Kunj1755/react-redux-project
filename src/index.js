import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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

//Pass rootReducer to store
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
