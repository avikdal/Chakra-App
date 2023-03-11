import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home";
import About from "./About";
import Chakras from "./Chakras";

function App() {
  // const [chakraData, setChakraData] = useState([])

  fetch('http://localhost:3000/chakraData')
  .then(r => r.json())
  .then(chakra => console.log(chakra))
  console.log("hi")

  return (
    <div className="App">
      <Header />
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


