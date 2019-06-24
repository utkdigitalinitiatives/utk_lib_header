import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import Skip from './components/Skip';
import Header from './Header';
import Home from './components/Home';

import './scss/styles.scss';

// build skip
const skip = document.createElement("div");
skip.setAttribute("id", "utk-lib-skip");
skip.setAttribute("class", "utk-skip");
document.body.insertBefore(skip, document.getElementById('utk-lib-header'));

// render skip, header and inline hours
ReactDOM.render(<Skip />, document.getElementById('utk-lib-skip'));
ReactDOM.render(<Header />, document.getElementById('utk-lib-header'));
ReactDOM.render(<Home />, document.getElementById('utk-lib-home'));
