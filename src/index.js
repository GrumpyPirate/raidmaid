import React from 'react';
import ReactDOM from 'react-dom';

// Style
import 'sanitize.css';
import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  })
}

registerServiceWorker();
