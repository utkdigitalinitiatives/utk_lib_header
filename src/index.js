import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import Skip from './components/Skip';
import Header from './Header';
import Home from './components/Home';
import HomeHours from './components/HomeHours';


import './scss/styles.scss';

// build skip
const skip = document.createElement("div");
skip.setAttribute("id", "utk-lib-skip");
skip.setAttribute("class", "utk-skip");
document.body.insertBefore(skip, document.getElementById('utk-lib-header'));

// render skip, header and inline hours
if (document.getElementById('utk-lib-skip')) {
    ReactDOM.render(<Skip />, document.getElementById('utk-lib-skip'));
}

if (document.getElementById('utk-lib-header')) {
    ReactDOM.render(<Header />, document.getElementById('utk-lib-header'));
}

if (document.getElementById('utk-lib-home')) {
    ReactDOM.render(<Home />, document.getElementById('utk-lib-home'));
}

if (document.getElementById('utk-home-hours')) {
    ReactDOM.render(<HomeHours />, document.getElementById('utk-lib-home-hours'));
}
