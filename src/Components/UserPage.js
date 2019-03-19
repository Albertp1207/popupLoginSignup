import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class UserPage extends Component {
    // getNames = (string)=>{
    //     let i = string.indexOf("-");
    //     let userName = string.slice(0,i);
    //     let fullName = string.slice(i+1);
    //     return {userName,fullName}
    // }
    state = {
        exit:false
    }
    exit = ()=>{
        this.setState({
            exit:true
        })
    }
    render(){
        // let {userName,fullName} = this.getNames(this.props.match.params.userinfo);
        let name = this.props.match.params.userinfo;
        if(this.state.exit) {
            return <Redirect to ="/"/>
        }
        return (
            <div id="userPage">
                <div id="header">
                    <label>{name}</label>
                    <button onClick={this.exit}>Exit</button>
                </div>
                <h1>HELLO <span>{name}</span> !!!!</h1>
            </div>
        )
    }
}

export default  UserPage;