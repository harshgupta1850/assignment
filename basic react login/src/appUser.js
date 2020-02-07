import React,{Component} from 'react';
import User from './user.js';
import Guest from './guest.js';

class AppUser extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false
        }
    }
    clickLogIn = () =>{
        this.setState({
            isLoggedIn: true
        })
    }
    clickLogOut = () =>{
        this.setState({
            isLoggedIn: false
        })
    }
    render(){
        return(
            <div>
                {this.state.isLoggedIn ? <User clickData={this.clickLogOut}/> : <Guest clickData={this.clickLogIn}/>}
            </div>
        )
            
    }
}

export default AppUser;