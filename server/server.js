var PORT = process.env.PORT || 3000;
var STATIC_DIR = __dirname + '/../client';
console.log('starting app');
require('./index').start(PORT, STATIC_DIR);
