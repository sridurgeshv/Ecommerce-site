import React, { createContext, useState, useEffect } from 'react';
import userPool, { getUserProfile } from "./../UserPool";

const UserContext = createContext({ profile: { username: '', email: '', }, setProfile: () => {}, });

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState({ username: '', email: '', });

  useEffect(() => {
    getUserProfile()
      .then(userProfile => {
        if (userProfile) {
          setProfile({
            username: userProfile['cognito:username'],
            email: userProfile.email,
          });
        }
      })
      .catch(err => {
        console.error('Failed to fetch user profile:', err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;