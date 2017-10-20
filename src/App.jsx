import * as React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/Error404';

import store from './store';

// Here comes App specific stuff from client and server
// (Provider, etc)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
