import React,{useState} from 'react';

function useCustomHook(){
    const [count,setCount]=useState(0)
    const handle= () =>{
        setCount(count+1)
    }
    return {
        count,
        handle
    }
}

export default useCustomHook;
