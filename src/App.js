import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home.component.js";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Aboutus from "./components/aboutus.component";
import Contactus from "./components/contactus.component";

function App() {
  return (<Router>
    <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/home"}>My App</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link class="nav-link active"  to={"/home"}>Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to={"/about"}>About Us</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to={"/contactus"}>Contact Us</Link>
                </li>
                
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signin"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={Aboutus} />
            <Route path="/contactus" component={Contactus} />
          </Switch>
        </div>
        
    </div>
    </Router>
  );
}

export default App;