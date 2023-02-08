import {applyMiddleware, createStore} from 'redux';
import AppReducers from './reducers'
import thunk from 'redux-thunk';

export default createStore(AppReducers, {}, applyMiddleware(thunk))


