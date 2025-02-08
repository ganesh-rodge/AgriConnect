import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return showSignUp ? <SignUp /> : <Login onSignUp={() => setShowSignUp(true)} />;
}

export default App;