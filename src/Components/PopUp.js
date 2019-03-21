import React, {Component} from "react";
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";

import LoginPage from "./LoginPage"
import RegPage from "./RegPage"


class PopUp extends Component {
    state = {
        goHome:false
    }
    close = ()=>{
        this.setState({
            goHome:true
        })
    }
    render(){
        console.log(this.props.match)
        if(this.state.goHome) return <Redirect to="/" />
        return (
            <div id="popup">
                <div id="mainpopup">                    
                <button onClick = {this.close}id="closer">Close</button>

                    <Route path = "/login" component={LoginPage}  />
                    <Route path = "/registration"  component={RegPage} />
                </div>
            </div>
        )
    }
}

export default PopUp;