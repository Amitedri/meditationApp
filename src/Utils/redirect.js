const redirect = (path) => {
  setTimeout(() => {
    window.location = path;
  }, 1000);
};

export default redirect;
