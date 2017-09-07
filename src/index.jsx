import React from 'react';
import { render } from 'react-dom';

import Client from './Client';

// Here comes Provider from redux internationalization and
// common stuff for client and server.
function renderApp() {
  render(<Client />, document.getElementById('app'));
}

renderApp();

if (module.hot) {
  module.hot.accept('./Client', () => {
    renderApp();
  });
}
