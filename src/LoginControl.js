import React, { useCallback, useEffect, useState } from 'react';
import { Greeting }  from './Greeting';
import { LoginButton }  from './LoginButton';
import { LogoutButton }  from './LogoutButton';


export function LoginControl(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = (e) => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = (e) => {
    setIsLoggedIn(false);
  };
  
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}
