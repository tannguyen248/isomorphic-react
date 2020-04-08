import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './pages/App';

const root = document.getElementById('root');

render(<App />, root);

if (module.hot) {
  module.hot.accept('./pages/App.js', () => {
    const NextApp = require('./pages/App.js').default;
    render(<NextApp />, root);
  });
}
