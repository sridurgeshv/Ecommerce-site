// UserContext.js

import { createContext } from 'react';

const UserContext = createContext({
  profile: {
    username: '',
    email: '', // Include email in the initial profile object
  },
});

export default UserContext;
