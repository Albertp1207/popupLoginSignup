import React, {Component} from "react";
import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";

class RegPage extends Component {
    state = {
        fullName:null,
        email:null,
        userName:null,
        password:null,
        noValids:{
            userName:"",
            password:"",
            email:"",
            fullName:""
        },
        isLoginWork:false,
        goUserPage:false
    }


    regist = ()=>{
        if(!this.state.isRegWork) return;
        this.setState({
            goUserPage:true
        })
    }
    render(){
        // console.log(this.props.match)
        let {noValids,isLoginWork} = this.state;

        console.log(isLoginWork)
        let uNT = noValids.userName.length >0;
        let pT = noValids.password.length >0;
        if(this.state.goUserPage) {
            let url = "/userpage/"+this.state.userName
            return <Redirect to={url} />
        }
        console.log(this.props.match)
        return (
            <div id="regPage" className="silo">
                <h1>Sign Up</h1>
                <div className="mainsilo">
                    <div className={uNT> 0 ? "errorRow silorow":"silorow"}>
                        <label>Full Name</label>
                        <input onChange={this.changeValues} placeholder={noValids.userName} name= "userName" type="text" />
                    </div>
                    <div className={pT> 0 ? "errorRow silorow":"silorow"}>
                        <label>Email</label>
                        <input onChange={this.changeValues} placeholder={noValids.password} name="password" type="password" />
                    </div>
                    <div className={pT> 0 ? "errorRow silorow":"silorow"}>
                        <label>User Name</label>
                        <input onChange={this.changeValues} placeholder={noValids.password} name="password" type="password" />
                    </div>
                    <div className={pT> 0 ? "errorRow silorow":"silorow"}>
                        <label>Password</label>
                        <input onChange={this.changeValues} placeholder={noValids.password} name="password" type="password" />
                    </div>
                </div>
                {/* <button className={!isRegWork?" noActive":null } onClick={this.regist} id="subb">Log In</button> */}
            </div>
        )
    }
}
export default RegPage;