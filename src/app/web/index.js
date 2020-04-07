import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './pages/App';

const Application = () => {
  return <App />;
};

const root = document.querySelector('#root');

render(Application, root);

if (module.hot) {
  module.hot.accept();
}
