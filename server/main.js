
const fastifyInstance = require('fastify')()
const apiai = require('apiai')
const uuidv4 = require('uuid/v4')
const path = require('path')
const fs = require('fs')
const util = require('util')

const public = path.join(__dirname, 'static');

fastifyInstance.register(require('fastify-static'), {
    root: public
})

const TOKEN = 'b6111438a5f54e6eaa70e72aaab8d380'
const app = apiai(TOKEN, {
    language: 'zh-CN'
});

function textRequestPromise(text) {
    return new Promise((reslove, reject) => {
        const request = app.textRequest(text, {
            sessionId: uuidv4()
        })
        request.on('response', function(response) {
            reslove(response)
        })
        
        request.on('error', function(error) {
            reject(error)
        })
        request.end()
    })
}

// fastifyInstance.get('/index', function (request, reply) {  
//     // const res = util.promisify(fs.readFile)(path.join(__dirname, '../index.html'))
//     // .then(function(buffer){
//     //      return Promise.resolve(buffer.toString())   
//     // })
//     const stream = fs.createReadStream(path.join(__dirname, '../index.html'), 'utf8')
//     reply
//     .type('text/html')
//     .send(stream)
// })

fastifyInstance.get('/dist', function (request, reply) {  
    // const res = util.promisify(fs.readFile)(path.join(__dirname, '../index.html'))
    // .then(function(buffer){
    //      return Promise.resolve(buffer.toString())   
    // })
    const stream = fs.createReadStream(path.join(__dirname, '../dist.js'), 'utf8')
    reply
    .send(stream)
})

fastifyInstance.get('/textRequest', function(request, reply) {
    const text = request.query.text
    const res = textRequestPromise(text)
    reply
    .code(200)
    .header('Content-Type', 'application/json')
    .send(res)
})

fastifyInstance.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastifyInstance.server.address().port}`)
})

