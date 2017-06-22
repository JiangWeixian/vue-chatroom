export const logined = state => {
  state.login = localStorage.getItem('login');
  return state.login
};

export const nickname = state => {
  state.nickname = localStorage.getItem('nickname');
  return state.nickname;
};

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

// temp-application-getters
export const currentAppThread = state => {
  return state.currentAppThread;
};

export const currentAppThreadInfo = state => {
  const appThread = currentAppThread(state);
  return appThread.info
    ? appThread.info
    : {};
};

export const currentAppThreadPosters = state => {
  const appThread = currentAppThread(state);
  return appThread.posters
    ? appThread.posters.map(id => state.tempAppPosters[id])
    : [];
};

//follw-application-getters
export const followAppList = state => {
  const apps = JSON.parse(localStorage.getItem('followAppList'));
  state.followAppList = apps
    ? apps
    : [];
  return state.followAppList;
};



export const test = state => state.test;
