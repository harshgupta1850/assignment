import React,{Component} from 'react';

class User extends Component{
    render(){
        return(
            <div>
                <h1> Welcome User</h1>
                <button onClick={this.props.clickData}>Logout</button>
            </div>
        )
    }

}

export default User;