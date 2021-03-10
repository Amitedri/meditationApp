export const validateInputs = (username, password, setState) => {
  if (!username || username === undefined || username === null) {
    const res = {
      success: false,
      message: 'Please enter a username',
    };
    setState(() => res);
    return false;
  }

  if (password.length <= 5) {
    const res = {
      success: false,
      message: 'Password is too short. please enter at least 6 characters.',
    };
    setState(() => res);
    return false;
  }

  const res = {
    success: true,
  };
  setState(() => res);
  return true;
};

export const saveToken = (token) => {
  if (!token) {
    return;
  }
  return window.sessionStorage.setItem('token', token);
};
