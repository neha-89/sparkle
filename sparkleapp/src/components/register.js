import React, { useState } from 'react';

const url = "https://sparkleloginapi.herokuapp.com/api/auth/login";
export default function Register(){
    const [user,setUser] = useState('')
    const [userDetails ,setUserDetails] = useState({
        email :'',
        password :''
    }) 
    const handleChange =(event)=>{
            setUser(event.target.value);
    }
    const login = () =>{
        fetch(url,{method:POST
            ,
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(userDetails)})
    }
    return(
        <>
        <form >
        <div className="mb-3 mt-3">
            <label for="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" value={userDetails.email} placeholder="Enter email" name="email" onChange= {handleChange}/>
        </div>
        <div class="mb-3">
            <label for="pwd" class="form-label">Password:</label>
            <input type="password" class="form-control" id="pwd" value = {userDetails.password} placeholder="Enter password" name="pswd" onChange={handleChange}/>
        </div>
        
        <button type="submit" onClick = {login} class="btn btn-primary">Submit</button>
        </form>
        </>
    )
    
}
import React,{Component} from 'react';
import Header from '../../header.js'

const url = "http://localhost:5000/api/auth/login";

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'saloni@gmail.com',
            password:'12345678',
            message:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
            <Header/>
            <div className="container">
                <hr/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        Login
                    </div>
                    <div className="panel-body">
                        <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                             <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            
                        </div>
                        <button className="btn btn-info" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default Login