import React from 'react';
import '../styles/App.scss';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Main from './Main.container';
import MealSelection from './MealSelection.container';
import Delivery from './Delivery.container';
import NoMatch from './NoMatch.container';


const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={props => <Main {...props} />} />
      <Route path="/meals" component={props => <MealSelection {...props} />} />
      <Route path="/delivery" component={Delivery} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
