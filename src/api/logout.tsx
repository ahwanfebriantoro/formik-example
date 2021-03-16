const logout = () => {
  window.localStorage.removeItem('login');
  return JSON.stringify({ message: 'Success, now get off from ere!!!' });
};

export default logout;
