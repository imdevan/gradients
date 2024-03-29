import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// Random colors for default state
import randomColor from 'randomcolor';
import {colorOptions} from './data/config';
import directions from './data/directions';

// import the root reducer
import rootReducer from './reducers/index';

// Default data
const colors = [randomColor(colorOptions), randomColor(colorOptions)];
const toast = 'hide';
const direction =  directions[0];

// create an object for the default data
const defaultState = {
  colors,
  toast,
  direction
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
