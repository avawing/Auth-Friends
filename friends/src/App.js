import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import SignInForm from "./components/SignInForm";
import NavBar from "./components/NavBar";

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  return (
    <div className="App">
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >


        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route exact path="/" component={SignInForm} />
      </div>
    </div>
  );
}

export default App;
