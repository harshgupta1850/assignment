import React, {Component} from 'react';

class Marks extends Component{
    constructor(props){
        super(props);
        this.state={
            mid:this.props.id
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log('call1');
        if(props.id!==state.mid){
            return {mid:props.id}
        }
        return null;

    }

    shouldComponentUpdate(nextState,nextProps){
        if(this.state.mid<4){
            console.log('updaety')
            console.log(nextState,nextProps,'hi')
            return true;
        }
        console.log(nextState,nextProps,'bye')
        return false;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getsnap')
        console.log(prevProps,prevState)
        return 45;
    }

    componentDidUpdate(prevProps,prevState,snpashot){
        console.log('didupdate')
        console.log(prevProps,prevState,snpashot)
    }
    render(){
        return(
            <div>
                <h1>{this.state.mid}</h1>
            </div>
        )
    }
}

export default Marks;