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
      <Route 
      path="/"
      exact
      render={props => <PhotoApiCall {...props}/>}
      />
      <LandingPage />
      
      
      
    </div>
  );
}

export default App;
