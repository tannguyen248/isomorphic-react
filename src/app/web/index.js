import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './pages/App';

const root = document.querySelector('#root');

const Appli = () => {
  return <div>a</div>
}
render(<Appli />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
