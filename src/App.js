import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Join from './components/Join';
import Chatroom from './components/Chatroom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/chat" component={Chatroom} />
      </Switch>
    </Router>
  );
}

export default App;
