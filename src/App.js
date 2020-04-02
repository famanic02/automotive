import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withAuthenticator} from 'aws-amplify-react';
import Main from './admin/Main';
  
    import {useState,useEffect} from 'react';

function App(props) {
//   const jwtToken = props.authData.signInUserSession.idToken.getJwtToken();
//   const url = 'https://ecneg0srf4.execute-api.us-east-1.amazonaws.com/default/autoback';
// const users = useStats(url);
     
      
     
    

  return (
    <div className="App">
  
      <Main></Main>
    </div>
  );
}

export default withAuthenticator(App,true);
