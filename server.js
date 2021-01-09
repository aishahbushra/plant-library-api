const app = require('./src/app');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('app.js');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const APP_PORT = 3306;

app.listen(APP_PORT, () => {
console.log(`Now serving your Express app at http://localhost:${APP_PORT}`)
});
    
