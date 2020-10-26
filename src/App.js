import React from "react";
import PhotoApiCall from "./components/PhotoApiCall";
import Header from "./components/Header"
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <PhotoApiCall />
    </div>
  );
}

export default App;
