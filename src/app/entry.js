import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

/** 
 * Enable hot reload
 */
if (module.hot) { 
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
