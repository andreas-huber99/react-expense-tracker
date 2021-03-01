import React from 'react';
import './App.css';
import{ Auth} from "aws-amplify";



function App() {
  return (
    <div className="App">
      <button onClick={() => Auth.federatedSignIn()}>Sign in</button>
      <button onClick={() => Auth.signOut()}>Sign out</button>

    </div>
  );
}

export default App;
