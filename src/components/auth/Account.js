import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { createContext, useState, useEffect } from 'react';
import UserPool from '../../UserPool'; // Assuming UserPool is configured correctly

// Create the AccountContext
const AccountContext = createContext();

const Account = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to get the current user session
  const getSession = async () => {
    await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();

      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(err);
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  // Function to authenticate the user
  const authenticate = async (username, password) => {
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: username,
        Pool: UserPool,
      });

      const authDetails = new AuthenticationDetails({
        Username: username,
        Password: password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          setIsAuthenticated(true);
          resolve(data); // Optional: return data for further processing
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  };

  // Function to log out the user
  const logout = () => {
    const user = UserPool.getCurrentUser();
    user.signOut();
    window.location.href = '/';
  };

  // Check authentication on component mount (optional)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await getSession();
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuth();
  }, []);

  return (
    <AccountContext.Provider value={{ authenticate, isAuthenticated, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
