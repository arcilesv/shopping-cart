import { createStore, combineReducers } from 'redux';

//Reducers
import {shoppingCartReducer} from '../reducers/shoppingCartReducer';

const reducers = combineReducers({
    shop: shoppingCartReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

