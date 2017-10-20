// @flow

import React from 'react';
import { Link } from 'react-router-dom';

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

export default Home;
