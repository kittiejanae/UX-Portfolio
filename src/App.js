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
        <Route
          path="/Adulted"
          component={() => {
            window.location =
              "https://github.com/KenzieAcademy-Students/ux-q4-react-todo-app-kittiejanae.git";
            return null;
          }}
        />
        <Route
          path="/DanceSavannah"
          component={() => {
            window.location = "https://priceless-clarke-626d27.netlify.app/";
            return null;
          }}
        />
        <Route
          path="/LocalJams"
          component={() => {
            window.location =
              "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FSyzGUxSljasNMWDe5xNJLg%2FLocal-Jams%3Fnode-id%3D228%253A345%26viewport%3D1512%252C-1396%252C0.38580018281936646%26scaling%3Dscale-down%26page-id%3D0%253A1";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
