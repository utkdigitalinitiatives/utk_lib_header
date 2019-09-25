import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import Skip from './components/Skip';
import Header from './Header';
import Home from './components/Home';
import HomeHours from './components/HomeHours';
import HoursLocationSection from "./components/HoursLocationSection";
import SpaceHours from './components/SpaceHours';

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

if (document.getElementById('utk-lib-home-hours')) {
    ReactDOM.render(<HomeHours />, document.getElementById('utk-lib-home-hours'));
}

if (document.getElementById('utk-hours--location--lid')) {
    ReactDOM.render(<HoursLocationSection />, document.getElementById('utk-hours--location--lid'));
}

function dayPicker() {
    Array.prototype.forEach.call(
        document.getElementsByClassName('utk-space--hours'),
        function(el) {
            var daypicker = el.getAttribute('data-daypicker');
            var hours = el.getAttribute('data-hours');
            var message = el.getAttribute('data-hours-message');
            var lid = el.getAttribute('data-hours-lid');
            ReactDOM.render(<SpaceHours daypicker={daypicker} hours={hours} lid={lid} message={message} />, el);
        }
    );
}

var watchDayPicker = function() {
    dayPicker();
};

dayPicker();
setInterval(watchDayPicker, 180);
