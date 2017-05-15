import { staticFriendAvatarPath } from '../config/cfg'
import { officeData } from './officeData'

export const initOfficeData = () => {
  return new Promise((resolve, rejec) => {
    if(officeData) {
      resolve(officeData)
    }
  })
};

export const createMessage = ({ text, thread, authorname }) => {
  return new Promise(( resolve, reject ) => {
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
    if(message) {
      resolve(message)
    }
  })
};
