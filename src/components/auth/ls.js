import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './ls.css';

const Button = ({ children, variant }) => {
  return (
    <button className={`button-${variant}`}>
      {children}
    </button>
  );
};

const Ls = () => {
  const { profile } = useContext(UserContext);

  console.log('Profile:', profile); // Add this line to debug

  return (
    <div className="container">
      <h1>Login and Security</h1>
      <div className="item">
        <div className="item-content">
          <h2>Name</h2>
          <p className="name">{profile ? profile.username : ''}</p>
        </div>
        <Button variant="outline">Edit</Button>
      </div>
      <div className="item">
        <div className="item-content">
          <h2>Email</h2>
          <p className="email">{profile ? profile.email : ''}</p>
        </div>
        <Button variant="outline">Edit</Button>
      </div>
      <div className="item">
        <div className="item-content">
          <h2>Primary mobile number</h2>
          <p className="subtext">
            Quickly sign in, easily recover passwords, and receive security notifications with this mobile number.
          </p>
        </div>
        <Button variant="outline">Edit</Button>
      </div>
      <div className="item">
        <div className="item-content">
          <h2>Passkey</h2>
          <p className="subtext">
            Sign in the same way you unlock your device by using your face, fingerprint, or PIN.
          </p>
        </div>
        <Button variant="outline">Set up</Button>
      </div>
      <div className="item">
        <div className="item-content">
          <h2>2-step verification</h2>
          <p className="subtext">Authenticator App</p>
          <p className="subtext">
            Enter a code sent to your verification method, in addition to your password, to sign in securely.
          </p>
        </div>
        <Button variant="outline">Manage</Button>
      </div>
      <div className="item">
        <div className="item-content">
          <h2>Password</h2>
        </div>
        <Button variant="outline">Edit</Button>
      </div>
      <div className="item">
        <div className="item-content">
          <h2>Compromised account?</h2>
          <p className="subtext">Take steps like changing your password and signing out everywhere.</p>
        </div>
        <Button variant="outline">Start</Button>
      </div>
    </div>
  );
}

export default Ls;
