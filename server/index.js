const Koa = require('koa');
const http = require('http');
const config = require('./config');
const app = new Koa();
const server = http.createServer(app.callback());
const io = require('socket.io')(server);

const cors = require('./middleware/cors');

app.use(async (ctx, next) => {
    await next();
    ctx.body = 'Hello World';
});

if(config.debug) {
    app.use(cors(config.client_host));
}

io.on('connection', (socket) => {
    console.log('connection')
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
});

server.listen(config.port);