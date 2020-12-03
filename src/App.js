import React from "react";
import { Route } from "react-router-dom";
import PhotoApiCall from "./components/PhotoApiCall";
import Header from "./components/Header"
import "./App.css";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage
      path='/'
      /> 
      <Route 
      path="Photo"
      exact
      render={props => <PhotoApiCall {...props}/>}
      />
    </div>
  );
}

export default App;
