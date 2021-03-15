import React from 'react';
import './App.css';
import{ Auth} from "aws-amplify";
import AccountForm from './components/forms/account-form';



function App() {
  return (
    <div className="App">
      <AccountForm></AccountForm>
    </div>
  );
}

export default App;
