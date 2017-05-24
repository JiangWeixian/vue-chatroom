/**
 * chat socket, process messgae
 * ------------------------
 * @on-message: receive messgae from client, and send it to data.to
 * ------------------------
 */
function chatSocket(Socket) {
  Socket.on('message', function (data) {
    console.log('message:');
    console.log(data);
    console.log(Socket.id);
    if(data.to != 'all') {
      var socketArr = USERSOCKETMAP[data.to];
      if(socketArr) {
        socketArr.forEach(function (socket, index) {
          if(socket.connect) {
            Socket.broadcast.to(socket.id).emit('message', {
              text: data.text,
              author: data.author
            });
          }
          else {
            socketArr.splice(index, index);
          }
        });
        USERSOCKETMAP[data.to] = socketArr;
      }
      else {
        console.log('user' + data.to + 'not online! should stored those message')
      }
    }
  });
}

module.exports = chatSocket;
