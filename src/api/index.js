import { staticFriendAvatarPath } from '../config/cfg'

export const createMessage = ({ text, thread, authorname }) => {
  return new Promise(function( resolve, reject ) {
    const timestamp = Date.now();
    const id = 'ms_' + timestamp;
    const message = {
      id: id,
      text: text,
      threadId: thread.id,
      threadName: thread.name,
      authorName: authorname,
      timestamp: timestamp,
      avatar: staticFriendAvatarPath + authorname + '.jpg'
    };
    if (message) {
      resolve(message)
    }
  })
};
