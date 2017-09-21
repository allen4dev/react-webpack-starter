// @flow

import * as React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import store from './store';

// Here comes App specific stuff from client and server
// (Provider, etc)

type State = {
  dummieState: string,
};

class Home extends React.Component<{}, State> {
  state = {
    dummieState: '',
  };

  render() {
    return (
      <div>
        <h1>You are in Home</h1>
        <Link to="/category/anime">Go to anime</Link>
        <Link to="/random">Go to random</Link>
      </div>
    );
  }
}

function Error404() {
  return <h1>You are in Error404</h1>;
}
/* eslint-disable*/
function Category({ match }) {
  return (
    <h1>
      You are in Category: {match.params.name}
    </h1>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:name" component={Category} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
