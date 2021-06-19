import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home'
import Meeting from './pages/meeting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meeting" component={Meeting} />  
      </Switch>
    </Router>
  );
}

export default App;
