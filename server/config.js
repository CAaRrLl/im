const path = require('path');

const env = process.env.NODE_ENV;
const port = process.env.PORT;

module.exports = {
    debug: env === 'prod'? false: true,
    port: port? port: 8181,
    database: {
        host: env === 'prod'? 'www.proj.xin': '127.0.0.1'
    },
    client_host: 'null',
}