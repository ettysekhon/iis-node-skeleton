var express = require('express');

exports.start = function(PORT, STATIC_DIR) {
    var app = express();

    // log requests
    app.use(express.logger('dev'));

    // serve static files for demo client
    app.use(express.static(STATIC_DIR));

    app.listen(PORT, function() {
        console.log('Go to http://localhost:' + PORT + '/');
    });
};

