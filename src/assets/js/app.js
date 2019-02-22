import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


// libs.AOS.init();


import chatBox from './modules/_chat.js';

$(() => {
    chatBox();
});


import menu from './modules/_menu.js';

$(() => {
    menu();
});

import headerbg from './modules/_headerbg.js';

$(() => {
    headerbg();
});


import projectscroll from './modules/_project-scroll.js';

$(() => {
    projectscroll();
});


import Form from './modules/_form.js';

$(function () {

  Form();

});

/*jslint browser: true*/
/*jslint node: true */
/*global $, jQuery, alert, console*/
'use strict';


// AOS.init({
//     offset: 200,
//     duration: 600,
//     easing: 'ease-in-sine',
//     delay: 100,
//   });

  


