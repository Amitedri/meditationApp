import React from 'react';

const useToken = () => {
  const getToken = () => {
    const token = window.sessionStorage.getItem('token');
    return token;
  };

  const [token, setToken] = React.useState(getToken());

  const deleteToken = () => {
    window.sessionStorage.removeItem('token');
    setToken(() => '');
  };

  return { token,deleteToken };
};

export default useToken;
