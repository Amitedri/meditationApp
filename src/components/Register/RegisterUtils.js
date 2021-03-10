export const validatePasswords = (pass1, pass2, setErrors) => {
  const passwordMatch = pass1 === pass2;
  const passwordLength = pass1.length > 5 && pass2.length > 5;
  if (!pass1 || !pass2) {
    const res = {
      success: false,
      message: 'Passwords fields are required.',
    };
    setErrors(() => res.message);
    return false;
  }
  if (!passwordMatch) {
    const res = {
      success: false,
      message: 'Passwords must match.',
    };
    setErrors(() => res.message);
    return false;
  }
  if (!passwordLength) {
    const res = {
      success: false,
      message: 'Passwords length should be at least 6 chars length.',
    };
    setErrors(() => res.message);
    return false;
  }
  return true;
};
export const validateUsername = (username, setErrors) => {
  if (username.length < 1) {
    const res = {
      success: false,
      message: 'Please enter a username',
    };
    setErrors(() => res.message);
    return false;
  }
  const res = {
    success: true,
  };
  return true;
};
export const handleClosePopup = (event) => {
  const ev = document.createEvent('HTMLEvents');
  ev.initEvent('closeModal', true, false);
  event.target.dispatchEvent(ev) || document.querySelector(".introContainer").dispatchEvent(ev)
};
