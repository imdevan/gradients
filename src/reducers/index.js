import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import colors from './colors';

const rootReducer = combineReducers({colors, routing: routerReducer });

export default rootReducer;
