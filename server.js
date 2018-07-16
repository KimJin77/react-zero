const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

app.use(async ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./dist/index.html');
});
app.listen(3000);

console.log("server running on 3000")