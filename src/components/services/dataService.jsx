let socket = null;
export const saveSocket = (s) => {
  socket = s;
};
export const getSocket = () => {
  return socket;
};

export const setSession = (user) =>{
  sessionStorage.setItem('username', `${user.username}`);
  sessionStorage.setItem(`permission`, `${user.permission}`)
}



