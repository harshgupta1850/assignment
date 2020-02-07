import React,{Component} from 'react';
import Marks from './marks.js';

class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            id:1,
            name:"Rahul"
        }
        this.handleClick=this.handleClick.bind(this)
    }
    
    handleClick = () =>{
        this.setState({id:this.state.id+1})
    }
    render(){
        return(
            <div>
                <Marks id={this.state.id}/>
                <h1>{this.state.id}</h1>
                <button onClick={this.handleClick}>click me</button>
            </div>
            
        )
    }
}


export default Student;