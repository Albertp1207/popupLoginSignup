import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Req from "./Req";

class Home extends Component {
    componentDidMount(){
        this.myReq();
    }
    myReq = async ()=>{
        let asd = await Req("https://reqres.in/api/login","POST",{email:"peteasdr",password:"dslicka"})
    
        console.log(!!asd.error)
    }
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