import React from 'react';
import ReactDOM from 'react-dom';
import Skip from './components/Skip';
import Header from './Header';

import './scss/styles.scss';

// build skip
const skip = document.createElement("div");
skip.setAttribute("id", "utk-lib-skip");
skip.setAttribute("class", "utk-skip");
document.body.insertBefore(skip, document.getElementById('utk-lib-header'));

// render skip and header
ReactDOM.render(<Skip />, document.getElementById('utk-lib-skip'));
ReactDOM.render(<Header />, document.getElementById('utk-lib-header'));
