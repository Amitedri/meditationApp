import React from 'react';
import './Register.css';
import axios from 'axios';
import { saveToken } from '../Login/LoginUtils';
import Fade from 'react-reveal/Fade';
import {showModal} from '../Navbar/Utils';
//Utils
const utils = require('./RegisterUtils');

const Register = ({ getErrors, redirect }) => {
  const { validatePasswords, validateUsername } = utils;

  /*ALL FORM CONSTANTS*/
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');

  //COMPOSITION {success, message}
  const [errors, setErrors] = React.useState('');

  React.useEffect(() => {
    getErrors(errors);
  }, [errors]);

  const handleSubmit = async () => {
    const isUserValid = validateUsername(username, setErrors);
    const passwordsAreValid = validatePasswords(password, confirm, setErrors);
    if (isUserValid && passwordsAreValid) {
      const req = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:5000/meditate/register',
        //Since passwords sends actually over HTTPS protocol no need for further encryption
        data: { username, password },
        headers: {
          'Content-type': 'application/json',
        },
      });
      //
      req.data.success ? saveToken(req.data.token) : getErrors(req.data.message);
      req.data.success && redirect('/meditate');
    }
  };

  return (
    <Fade top>
      <div className="registerContainer">
        <span className="closeButton" onClick={(event) => utils.handleClosePopup(event)}>
          X
        </span>
        <span className="registerHeader">Sign up and start meditating today!</span>
        <input type="text" placeholder="Username" onInput={(event) => setUsername(event.target.value)} onFocus={() => validateUsername(username, setErrors)} />
        <input
          type="text"
          placeholder="Password"
          onInput={(event) => setPassword(event.target.value)}
          onFocus={() => validatePasswords(password, confirm, setErrors)}
        />
        <input
          type="text"
          placeholder="Confirm password"
          onInput={(event) => setConfirm(event.target.value)}
          onFocus={() => validatePasswords(password, confirm, setErrors)}
        />
        <p className="gotAccountButton" >
          Already got an account? <a id='login' onClick={(event) => showModal(event, 'showModal')}>Sign in</a>{' '}
        </p>
        <div className="registerControllersContainer">
          <button onClick={() => handleSubmit()}>Register</button>
        </div>
      </div>
    </Fade>
  );
};

export default Register;
