//var React = require('react');
//var ReactDOM = require('react-dom');
//var createReactClass = require('create-react-class');

// JS эквивалентно любому нормальному пакету "bootstrap"
// не надо устанавливать это в переменную, просо запросите его
require('bootstrap-sass');

// загружает пакет jquery из node_modules
var $ = require('jquery');

// импортировать функцию из Table.js (расширение .js необязательно)
// ./ (or ../) means to look for a local file
var Table = require('./Table');

var t = Table();


// импортировать функцию из React.js (расширение .js необязательно)
// ./ (or ../) means to look for a local file
var React = require('react');
var ReactDOM = require('react-dom');

//console.log(React);
//console.log('======================');
//console.log(ReactDOM);
