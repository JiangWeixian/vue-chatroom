/**
 * logout socket
 * ------------------------
 * @on-logout: when wakebutton was destroyed! remove data.user in USERSOCKETMAP
 * ------------------------
 */

function socketLogout(Socket) {
  Socket.on('disconnect', function (data) {
    console.log('disconnect');
    var socketName = Socket.name;
    var socketId = Socket.id;
    var socketArr = USERSOCKETMAP[socketName];
    socketArr.forEach(function (socket, index) {
      if(socket.id == socketId) {
        console.log('splice');
        socketArr.splice(index, 1);
        console.log(socketArr);
      }
    });
    USERSOCKETMAP[socketName] = socketArr;
  })
}

module.exports = socketLogout;
