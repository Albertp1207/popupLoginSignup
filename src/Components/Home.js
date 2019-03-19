import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <div id="login">
                <div id="mainLogin">
                    <label><Link to="/login">Log In</Link></label>
                    <label id="or">or</label>
                    <label><Link to="/registration">Sign Up</Link></label>
                </div>
            </div>
        )
    }
}

export default Home;