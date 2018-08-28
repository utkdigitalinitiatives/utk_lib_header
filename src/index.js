import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('utk-lib-header'));
registerServiceWorker();
