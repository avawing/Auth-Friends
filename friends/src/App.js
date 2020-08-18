import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <SignInForm />
      </div>
    </div>
  );
}

export default App;
