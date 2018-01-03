// JS эквивалентно любому нормальному пакету "bootstrap"
// не надо устанавливать это в переменную, просо запросите его
require('bootstrap-sass');

// загружает пакет jquery из node_modules
var $ = require('jquery');

// импортировать функцию из Table.js (расширение .js необязательно)
// ./ (or ../) means to look for a local file
var Table = require('./Table');
var create_table = Table();

// импортировать функцию из Filter.js
// ./ (or ../) means to look for a local file
var Filter = require('./Filter');
var create_filter = Filter();


