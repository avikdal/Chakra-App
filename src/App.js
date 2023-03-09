import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import NavBar from "./NavBar"
import Home from "./Home";
import About from "./About";
import Chakras from "./Chakras";

function App() {
  console.log("hi")
  
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/chakras">
          <Chakras />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App


