import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return showSignUp ? <SignUp /> : <Login onSignUp={() => setShowSignUp(true)} />;
}

export default App;