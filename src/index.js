import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import I18n from 'redux-i18n';
import {
  Provider,
} from 'react-redux';

// store
import {
  Router,
} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './store';
// routing
//
import translations from './i18n/i18n';

import App from './containers/App';


const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations} initialLang="es">
      <Router history={history}>
        <App />
      </Router>
    </I18n>
  </Provider>,
  document.getElementById('root'),
);
