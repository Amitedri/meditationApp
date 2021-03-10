import React from 'react';
//for navbar use to set component in view
export const getUserAccountAction = (setAccountState, data) => {
  return setAccountState(() => data);
};
//error string from login/register components
export const getErrors = (setErrorsProp, data) => {
  console.log('err', data);
  setErrorsProp(() => data);
};
//Gets results from server over auth request and updates props
export const getAuth = (setIsAuth, data) => {
  if (data === undefined || data === null) {
    return;
  }
  window.localStorage.setItem('isAuth', data);
  return setIsAuth(data);
};

export const throttling = (callback, limit, time) => {
  /// monitor the count
  var calledCount = 0;
  /// refresh the `calledCount` varialbe after the `time` has been passed
  setInterval(function () {
    calledCount = 0;
  }, time);
  /// creating a closure that will be called
  return () => {
    /// checking the limit (if limit is exceeded then do not call the passed function
    if (limit > calledCount) {
      /// increase the count
      calledCount++;
      callback(); /// call the function
    } else console.log('not calling because the limit has exceeded');
  };
};

export const scrollToElem = () => {
  const mid = document.querySelector('.pageContainer');
  return mid.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
  });
};

export const displayComponent = (Register, getErrors, props, Login, accountState) => {
  if (accountState === 'register') {
    return <Register getErrors={getErrors} {...props} />;
  }
  if (accountState === 'login') {
    return <Login getErrors={getErrors} {...props} />;
  }
  if (accountState === '') {
    return null;
  }
};
