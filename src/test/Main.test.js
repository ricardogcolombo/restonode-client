
import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../containers/Main.container';

import createBrowserHistory from 'history/createBrowserHistory';

it('renders without crashing', () => {
  const history = createBrowserHistory();
  const div = document.createElement('div');
  ReactDOM.render(<Main history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
