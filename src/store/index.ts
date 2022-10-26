import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import realMode from './reducers/realMode';
import modal from './reducers/modal';
import gameResult from './reducers/gameResult';
import lightMode from './reducers/lightMode';
import wall from './reducers/wall';
import mines from './reducers/mines';
import keno from './reducers/keno';

const reducer = combineReducers({
    keno,
    wall,
    mines,
    modal,
    realMode,
    lightMode,
    gameResult
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;
