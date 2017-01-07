import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import colors from './colors';
import toast from './toast';
import direction from './direction';

const rootReducer = combineReducers({
  colors,
  toast,
  direction,
  routing: routerReducer
});

export default rootReducer;
