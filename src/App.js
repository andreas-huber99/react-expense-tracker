import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports"
import {AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react"

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
