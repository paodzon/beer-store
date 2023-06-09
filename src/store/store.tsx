

import reducers from "./reducers";
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;