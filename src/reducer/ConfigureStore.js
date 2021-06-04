import { combineReducers, createStore, applyMiddleware } from 'redux';
import basket from './basket/basket';

const reducer = combineReducers({
    basket: basket,
});

const store = createStore(reducer);

export default store;