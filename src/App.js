import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Resume" component={Resume} />
        <Route
          path="/LinkedIn"
          component={() => {
            window.location =
              "https://www.linkedin.com/in/natassja-jordan-79b070b7";
            return null;
          }}
        />
        <Route path="/Contact" component={Contact} />
        <Route
          path="/Heirloom"
          component={() => {
            window.location = "https://festive-bell-be146e.netlify.app/";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
