import React, {Component} from "react";
import {BrowserRouter as Router,Redirect} from "react-router-dom";
import Req from "./Req"
const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
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
        isRegWork:false,
        goUserPage:false,
        hint:"",
        isLoading:false,
        message:null,
        errC: 0
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.goUserPage) {
            if(nextState.userName === "asd") {
                this.setState({
                    message: nextState.userName + " is blocked" ,
                    goUserPage: false
                })
                return false;
            }
        }
        return true
    }

    componentDidUpdate(prevProps,prevState){
        let {noValids} = this.state;
        let c =0;
        for(let key in noValids) {
            if(noValids[key].length >0) {
                c++
            }
        }
        if(c !== prevState.errC) {
            this.setState({
                errC:c
            })
        }
    }


    changeValues = (ev)=>{
        let {name,value} = ev.target;
        let {fullName,email,userName,password} = this.state;
        let params = {fullName,email,userName,password}
        let isRegWork = true;
        let noValids = {...this.state.noValids};
        console.log(ev.target.value)
        params[name] = value
        if(name === "email") {
            if(!emailRegex.test(value)) {
                // console.log(name)
                noValids.email = "Invalid Email !!!"
            } else {
                noValids.email=""
            }
        }
        if(value.length === 0) {
            noValids[name] = "Complete "+ name+' !!!';
        } else if(name !== "email") {
            noValids[name] = ""
        }
        // console.log(noValids)

        Object.values(noValids).forEach(el=>{
            if(el.length > 0) {
                isRegWork = false;
            }
        })

        Object.values(params).forEach(el=>{
            if(!el) {
                isRegWork = false;
            }
        })
 
        this.setState({
            [name]:value,
            noValids,
            isRegWork
        })
    }
    regist = ()=>{

        if(!this.state.isRegWork) return;
        let {email,password} = this.state;
        this.setState({
            isLoading:true
        })
        Req("https://reqres.in/api/register","POST",{email,password})
            .then(data=>{
                if(!!data.error) {
                    this.setState({
                        isLoading:false,
                        hint:data.error
                    })
                }else {                    
                    this.setState({
                        goUserPage:true,
                        isLoading:false
                    })
                }
            })
    }
    render(){
        // console.log(this.props.match)
        let {noValids,isRegWork,isLoading,hint,message,errC} = this.state;

        if(isLoading) {
            hint = "Loading ..."
        }
        if(message) {
            hint = message
        }
        if(errC) {
            hint = hint += " count of erros "+ errC;
        }
        let uNT = noValids.userName.length >0;
        let pT = noValids.password.length >0;
        let eT = noValids.email.length >0;
        let fT = noValids.fullName.length >0;

        if(this.state.goUserPage) {
            let url = "/userpage/"+this.state.userName
            return <Redirect to={url} />
        }
        return (
            <div id="regPage" className="silo">
                <h1>Sign Up</h1>
                <div className="mainsilo">
                    <div className={fT> 0 ? "errorRow silorow":"silorow"}>
                        <label>Full Name</label>
                        <input onBlur={this.changeValues} placeholder={noValids.fullName} name= "fullName" type="text" />
                    </div>
                    <div className={eT> 0 ? "errorRow silorow":"silorow"}>
                        <label>Email</label>
                        <input onBlur={this.changeValues} placeholder={noValids.email} name="email" type="text" />
                    </div>
                    <div className={uNT> 0 ? "errorRow silorow":"silorow"}>
                        <label>User Name</label>
                        <input onBlur={this.changeValues} placeholder={noValids.userName} name="userName" type="text" />
                    </div>
                    <div className={pT> 0 ? "errorRow silorow":"silorow"}>
                        <label>Password</label>
                        <input onBlur={this.changeValues} placeholder={noValids.password} name="password" type="password" />
                    </div>
                </div>
                <button className={!isRegWork?" noActive":null } onClick={this.regist} id="subb">Sign Up</button>
                <label id="hintOfLogin">{hint}</label>
            </div>
        )
    }
}
export default RegPage;