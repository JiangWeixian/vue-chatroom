export const logined = state => state.login;

export const nickname = state => state.nickname;

export const currentThread = state => {
  const currentId = state.currentThreadId;
  return currentId
    ? state.threads[currentId]
    : {}
};

export const currentMessage = state => {
  const thread = currentThread(state);
  return thread.messages
    ? thread.messages.map(id => state.messages[id])
    : [];
};

export const threads = state => {
  return state.threadsList
    ? state.threadsList.map(id => state.threads[id])
    : [];
};


export const test = state => state.test;
