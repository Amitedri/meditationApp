import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Login.css';
import { handleClosePopup } from '../Register/RegisterUtils';
import { showModal } from '../Navbar/Utils';
const { validateInputs, saveToken } = require('./LoginUtils');
const Login = ({ getErrors, redirect }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getErrors(errors.message);
  }, [errors.message, getErrors]);

  const handleUserName = React.useCallback((event) => setUsername(event.target.value), []);
  const handlePassword = React.useCallback((event) => setPassword(event.target.value), []);

  const handleSubmit = async () => {
    // validateInputs(username, password, setErrors)
    const isFormValid = validateInputs(username, password, setErrors);
    if (isFormValid) {
      const req = await Axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/meditate/login',
        data: { username, password },
        headers: {
          'Content-type': 'application/json',
        },
      });
      req.data.success ? saveToken(req.data.token) : getErrors(req.data.message);
      window.sessionStorage.setItem('sessions', req.data.data);
      req.data.success && redirect('/meditate');
    }
  };

  return (
    <div className="loginContainer">
      <span className="closeButton" onClick={(event) => handleClosePopup(event)}>
        X
      </span>
      <span>Already got an account? great!</span>
      <input type="text" placeholder="Username" onInput={(event) => handleUserName(event)} />
      <input type="text" placeholder="Password" onInput={(event) => handlePassword(event)} />
      <div className="loginControllersContainer">
        <button onClick={() => handleSubmit(username, password)}>Sign-in</button>
      </div>
      <p className="gotAccountButton">
        Want an account?
        <a id="register" onClick={(event) => showModal(event, 'showModal')}>
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
