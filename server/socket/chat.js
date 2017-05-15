function chat(Socket) {
  Socket.on('login', function (data) {
    console.log(data)
  })
}

module.exports = chat;
