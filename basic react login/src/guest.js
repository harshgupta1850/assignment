import React,{Component} from 'react';

class Guest extends Component{
    render(){
        return(
            <div>
                <h1> Welcome Guest</h1>
                <button onClick={this.props.clickData}>Login</button>
                <button>Signup</button>
            </div>
        )
    }

}

export default Guest;