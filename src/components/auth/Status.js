import { useContext, useEffect, useState } from 'react';
import { AccountContext } from './Account';

const Status = () => {
  const { getSession, logout } = useContext(AccountContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        await getSession();
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkSession();
  }, [getSession]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          {' '}
          You are logged in.
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        'Please Login'
      )}
    </div>
  );
};

export default Status;
