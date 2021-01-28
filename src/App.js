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
        <Route
          path="/TacticalHealthcare"
          component={() => {
            window.location =
              "https://www.figma.com/proto/lAGZOXMPiApv4Qf5VcSqsr/Tactical-Healthcare-Copy?node-id=17%3A33&viewport=-775%2C11%2C0.08140715211629868&scaling=scale-down";
            return null;
          }}
        />
        <Route
          path="/AllTones"
          component={() => {
            window.location =
              "https://www.figma.com/proto/7m47Y91cUg7q5QsghKcm1u/All-Tones?node-id=1%3A38&viewport=140%2C350%2C0.09226298332214355&scaling=scale-down";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
