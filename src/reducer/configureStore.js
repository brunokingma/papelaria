import {combineReducers, createStore, applyMiddleware} from 'redux';
import {stockReducers} from './stockReducer';
import thunk from 'redux-thunk';

 const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            stockReducers:stockReducers
        }),
        applyMiddleware(thunk)
    );

    return store;
}

export default ConfigureStore;