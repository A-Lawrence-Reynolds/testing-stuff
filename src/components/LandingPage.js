import React from "react";
// import {
//     BrowserRouter as Router,
//     Link,

// } from "React-router-dom";

// add landing page CTA and get a slid into mane page working
export default function LandingPage() {
  return (
    <>
      <div className="LandingPageMain">
        {/* Landing page content   */}
        <p>this is a paragraph tag.</p>
        <h2>Welcome to rand Pic's </h2>
        <h3>find a random picture</h3>
        <div className="LandingPageSecondary"></div>
      </div>
      <div>
        <p>Made by the firey beard developer.</p>
      </div>
    </>
  );
}
