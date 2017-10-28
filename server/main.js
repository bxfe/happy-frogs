const fastifyInstance = require('fastify')()
const apiai = require('apiai')
const uuidv4 = require('uuid/v4')
const path = require('path')

fastifyInstance.register(require('fastify-static'), {
    root: path.resolve(__dirname, '..')
})

const TOKEN = 'b6111438a5f54e6eaa70e72aaab8d380'
const app = apiai(TOKEN, {
    language: 'zh-CN'
});

function textRequestPromise(text, session) {
    return new Promise((resolve, reject) => {
        const request = app.textRequest(text, {
            sessionId: session || uuidv4()
        })
        request.on('response', resolve)
        request.on('error', reject)
        request.end()
    })
}

fastifyInstance.get('/textRequest', function(request, reply) {
    const text = request.query.text
    const session = request.query.session
    const res = textRequestPromise(text, session)
    reply.type('application/json').send(res)
})

fastifyInstance.listen(80, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastifyInstance.server.address().port}`)
})
