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
              "https://www.figma.com/proto/SyzGUxSljasNMWDe5xNJLg/Local-Jams?node-id=228%3A445&viewport=1512%2C-1396%2C0.38580018281936646&scaling=scale-down&page-id=0%3A1";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
