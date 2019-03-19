import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import './App.css';

import Home from "./Components/Home"
// import LoginPage from "./Components/LoginPage"
import PopUp from "./Components/PopUp"
// import RegPage from "./Components/RegPage"
import UserPage from "./Components/UserPage"


class App extends Component {
  render() {
    return (
      <Router>
        <Route path = "/" component={Home} exact />
        <Route path = "/login" component={Home} exact />
        <Route path = "/registration"  component={Home} exact/>

        <Route path = "/login" component={PopUp}  />
        <Route path = "/registration"  component={PopUp} />
        <Route path = "/userpage/:userinfo"  component={UserPage} />

      </Router>
    );
  }
}

export default App;
// exact lini mian /userpage-i depqum, mnacac depqerum nkarvi
