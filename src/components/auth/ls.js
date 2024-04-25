import React from 'react';
import "./ls.css";

// Define Button component here
const Button = ({ children, variant }) => {
  return (
    <button className={`button-${variant}`}>
      {children}
    </button>
  );
};

export default function Ls() {
  return (
    <div className="container">
      <h1>Login and Security</h1>
      <div className="item">
      <div className="item-content">
        <h2>Name</h2>
      </div>
      <Button variant="outline">Edit</Button>
    </div>
      <div className="item">
      <div className="item-content">
          <h2>Email</h2>
        </div>
        <Button variant="outline">Edit</Button>
      </div>
      <div className="item">
      <div className="item-content">
          <h2>Primary mobile number</h2>
          
          <p className="subtext">
            Quickly sign in, easily recover passwords and receive security notifications with this mobile number.
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
