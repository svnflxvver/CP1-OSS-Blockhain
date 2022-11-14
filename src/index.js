import React from 'react';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { render } from 'react-dom';
import App from './App';
import './App.css';
import './favicon.ico';

render(<App />, document.getElementById('app'));

moduleHotAccept(module);

export function moduleHotAccept(mod) {
  if (mod.hot) {
    mod.hot.accept('./App', () => {
      const NewApp = require('./App').default;
      render(NewApp(), document.getElementById('app'));
    });
  }
}
