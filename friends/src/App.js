import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignInForm />
    </div>
  );
}

export default App;
