import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import colors from './colors';
import toast from './toast';

const rootReducer = combineReducers({
  colors,
  toast,
  routing: routerReducer
});

export default rootReducer;
