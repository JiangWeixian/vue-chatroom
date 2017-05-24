/**
 * login socket, and others sockets should use after login!
 * ------------------------
 * @on-login: when wakebutton was created!
 *          - data.user are login user
 *          - maybe we should store USERSOCKETMAP(and as a argument) in datasets, and every login fetch socketArr! every disconnect upd
 * ------------------------
 */

function socketLogin(Socket) {
  console.log('connect successfully');
  console.log(Socket.id);
  Socket.on('login', function (data) {
    Socket.name = data.user;
    var socketArr = USERSOCKETMAP[data.user];
    console.log(Socket.name);
    if(!!socketArr){
      socketArr.push({ id: Socket.id, connect: true });
    }
    else {
      USERSOCKETMAP[data.user] = [];
      USERSOCKETMAP[data.user].push({ id: Socket.id, connect: true });
      console.log(USERSOCKETMAP[data.user]);
    }
  })
}

module.exports = socketLogin;
