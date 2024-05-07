import React, { useState, useContext } from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigate, Link } from 'react-router-dom';
import UserPool from '../../UserPool';
import UserContext from '../../contexts/UserContext';
import logo from '../assets/logo.png';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setProfile } = useContext(UserContext);

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
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>} 
        <button className="signin" type="submit">Login</button>
        <Link to="/register">
          <p>Don't have an account? <span className="signup">Sign up</span></p>
        </Link>
      </form>
    </div>
  );
};

export default Login;