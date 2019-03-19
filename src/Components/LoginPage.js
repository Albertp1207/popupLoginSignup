import React, {Component} from "react";
import { Redirect } from 'react-router';
class LoginPage extends Component {
    state = {
        userName:null,
        password:null,
        noValids:{
            userName:"",
            password:""
        },
        isLoginWork:false,
        goUserPage:false

    }
    changeValues = (ev)=>{
        let {name,value} = ev.target;
        let {userName,password} = this.state;
        let params = {userName,password};
        let isLoginWork = true;

        params[name] = value;
        let noValids = {...this.state.noValids};
        if(value.length === 0) {
            noValids[name] = "Complete "+ name+' !!!';
        } else {
            noValids[name] = ""
        }

        console.log(noValids);
        console.log(params)
        Object.values(noValids).forEach(el=>{
            if(el.length > 0) {
                isLoginWork = false;
            }
        })

        Object.values(params).forEach(el=>{
            if(!el) {
                isLoginWork = false;
            }
        })


        this.setState({
            [name]:value,
            noValids,
            isLoginWork
        })

    }
    login = ()=>{
        if(!this.state.isLoginWork) return;
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
        return (
            <div id="loginpage" className="silo">
                <h1>LOGIN</h1>
                <div className="mainsilo">
                    <div className={uNT> 0 ? "errorRow silorow":"silorow"}>
                        <label>User Name</label>
                        <input onChange={this.changeValues} placeholder={noValids.userName} name= "userName" type="text" />
                    </div>
                    <div className={pT> 0 ? "errorRow silorow":"silorow"}>
                        <label>Password</label>
                        <input onChange={this.changeValues} placeholder={noValids.password} name="password" type="password" />
                    </div>
                </div>
                <button className={!isLoginWork?" noActive":null } onClick={this.login} id="subb">Log In</button>
            </div>
        )
    }
}
export default LoginPage;