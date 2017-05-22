import { staticFriendAvatarPath } from '../config/cfg'
import { officeData } from './officeData'

export const initOfficeData = () => {
  return new Promise((resolve, rejec) => {
    //localStorage.setItem('messages', '');
    let messages;
    if(!!localStorage.getItem('messages')) {
      messages = JSON.parse(localStorage.getItem('messages'));
    }
    else{
      messages = officeData;
      localStorage.setItem('messages', JSON.stringify(messages));
    }
    if(messages) {
      resolve(messages)
    }
  })
};

export const createMessage = ({ text, thread, authorname }) => {
  let messages = JSON.parse(localStorage.getItem('messages'));
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
      messages.push(message);
      localStorage.setItem('messages', JSON.stringify(messages));
      resolve(message)
    }
  })
};
