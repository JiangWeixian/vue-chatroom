import { staticFriendAvatarPath } from '../config/cfg'

export const officeData = [
  {
    id: 'm_1',
    threadId: 'checklee',
    threadName: 'checklee',
    authorName: 'checklee',
    slot: 'leftAvatar',
    text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
    timestamp: Date.now() - 99999,
    avatar: staticFriendAvatarPath + 'checklee.jpg'
  },
  {
    id: 'm_2',
    threadId: 'checklee',
    threadName: 'checklee',
    authorName: 'checklee',
    slot: 'leftAvatar',
    text: 'Seems like a pretty cool conference.',
    timestamp: Date.now() - 89999,
    avatar: staticFriendAvatarPath + 'checklee.jpg'
  },
  {
    id: 'm_3',
    threadId: 'checklee',
    threadName: 'checklee',
    authorName: 'Saber',
    slot: 'rightAvatar',
    text: 'Sounds good.  Will they be serving dessert?',
    timestamp: Date.now() - 79999,
    avatar: staticFriendAvatarPath + 'Saber.jpg'
  },
  {
    id: 'm_4',
    threadId: 'Saber',
    threadName: 'Saber',
    authorName: 'Saber',
    slot: 'rightAvatar',
    text: 'Hey Dave, want to get a beer after the conference?',
    timestamp: Date.now() - 69999,
    avatar: staticFriendAvatarPath + 'Saber.jpg'
  },
  {
    id: 'm_5',
    threadId: 'Saber',
    threadName: 'Saber',
    authorName: 'Saber',
    slot: 'rightAvatar',
    text: 'Totally!  Meet you at the hotel bar.',
    timestamp: Date.now() - 59999,
    avatar: staticFriendAvatarPath + 'Saber.jpg'
  }
];
