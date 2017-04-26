
export const createMessage = ({ text, thread, authorname }) => {
  return new Promise(function( resolve, reject ) {
    const timestamp = Date.now();
    const id = 'm_' + timestamp;
    const message = {
      id: id,
      text: text,
      threadId: thread.id,
      threadName: thread.name,
      authorName: authorname,
      timestamp: timestamp
    };
    if (message) {
      resolve(message)
    }
  })
};
