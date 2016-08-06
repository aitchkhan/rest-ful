'use strict';

const restify = require('restify');
const config = require('./config/config.js');

let app =restify.createServer({
    version: "1.0.250",
    name: 'restFull'
});

app.use(restify.fullResponse());
app.use(restify.bodyParser());
app.use(restify.queryParser());

app.listen(config.port, () => {
    console.log("%s listening on %s port", app.name, app.url);
});


var routes = require('./routes')(app);


