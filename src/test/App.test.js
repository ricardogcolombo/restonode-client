import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
} from 'react-router';
import App from '../containers/App';

import createBrowserHistory from 'history/createBrowserHistory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = createBrowserHistory();
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
