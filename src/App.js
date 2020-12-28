import React from "react";
import { Route } from "react-router-dom";
// import PhotoApiCall from "./components/PhotoApiCall";
import Header from "./components/Header"
import "./App.css";
import LandingPage from "./components/LandingPage";
import PhotoDisplay from "./components/PhotoDisplay";


function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage
      path='/'
      
      /> 
      <Route 
      path="/Photo"
      
      render={props => <PhotoDisplay {...props}/>}
      />
    </div>
  );
}

export default App;
