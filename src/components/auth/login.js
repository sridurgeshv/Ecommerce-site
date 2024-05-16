import React, { useState, useContext } from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigate, Link } from 'react-router-dom';
import UserPool from '../../UserPool';
import UserContext from '../../contexts/UserContext';
import logo from '../assets/logo.png';
import { BsEyeSlash, BsEye } from 'react-icons/bs'; // Import eye icons
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setProfile } = useContext(UserContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = new CognitoUser({ Username: username, Pool: UserPool });
    const authDetails = new AuthenticationDetails({ Username: username, Password: password });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('login success', result);
        const userProfile = {
          username: result.idToken.payload['cognito:username'],
          // Add any other relevant user data from the result object
        };
        setProfile(userProfile); // Set the user profile in the context
        navigate('/'); // Navigate to the home page
      },
      onFailure: (err) => {
        console.log('login failure', err);
        setErrorMessage('Incorrect username or password. Please try again.'); // Set error message
      },
      newPasswordRequired: (data) => {
        console.log('new password required', data);
      },
    });
  };

  return (
    <div className="login">
      <img src={logo} alt="Logo" />
      <h2>Welcome back</h2>
      <h3>Log in to your Ecommerce account.</h3>
      <form onSubmit={onSubmit}>
        Username
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        Password
        <div className="password-field">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ paddingRight: '40px' }} // Adjust input padding for the toggle button
        />
        <div className="toggle-button-wrapper">
          <span
            className="toggle-password"
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer', // Add cursor pointer
            }}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </span>
        </div>
        </div>
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>} 
        <button className="signin" type="submit">Login</button>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <p className="signup">Don't have an account? <span>Sign up</span></p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
