import React from 'react';
import { render } from 'react-dom';

// Import css
import 'tachyons';
import './styles/app.css';


// Import Components
import App from './components/App';
import About from './components/About';
import Home from './components/Home';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/about" component={About}></Route>
        <Route path="/test/:slug" component={Home}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
