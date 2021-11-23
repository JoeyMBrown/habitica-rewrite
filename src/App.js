import GlobalStyles from './CSS-Reset/GlobalStyles';
import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import SignupButton from './components/SignupButton';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Profile />
      <LoginButton/>
      <LogoutButton/>
      <SignupButton/>
    </div>
  );
}

export default App;
