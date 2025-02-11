const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('todo.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 4444

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})