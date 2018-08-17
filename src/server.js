import Server from './app'

const serverInstance = new Server()

serverInstance.app.listen(5000, () => {
  console.log('\x1b[45m%s\x1b[0m', 'Listening at port 5000')
})
serverInstance.initDB()
