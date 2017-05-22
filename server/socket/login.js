
/**
 * login socket, and others sockets should use after login!
 * ------------------------
 * @on-login: when wakebutton was created!
 *          - data.user are login user
 * ------------------------
 */

function socketLogin(Socket) {
  console.log('connect successfully');
  var userSocketMap = {};
  Socket.on('login', function (data) {
    Socket.name = data.user;
    userSocketMap[data.user] = Socket.id;
    Socket.join(userSocketMap[data.user], function () {
      console.log('join successfully')
    });
    Socket.on('message', function (data) {
      console.log('message:');
      console.log(data);
      console.log(Socket.id);
      if(data.to != 'all') {
        console.log(Socket.rooms);
        Socket.in(userSocketMap[data.to]).emit('message', {
          text: data.text,
          author: data.author
        })
        // Socket.emit('message', {
        //   text: data.message,
        //   author: data.author
        // })
      }
    });
  })
}

module.exports = socketLogin;
