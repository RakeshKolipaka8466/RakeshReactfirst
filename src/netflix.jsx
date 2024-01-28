import React,{useState} from "react";

export const Card=()=>{
  const [count,setCount]=useState(0);
  const inc=()=>{
    setCount((preCount)=>{
      return preCount+1;
    });
    setCount((preCount)=>{
      return preCount+1;
    });
    
  }
  const dec=()=>{
    if(0<count){
      setCount((preCount)=>preCount-1);
      setCount((preCount)=>preCount-1);
      
    }
  }
    return(
        <main className="main">
            <button onClick={inc}>Increment</button>
            <span>{count}</span>
            <button onClick={dec}>Decrement</button>
        </main>
    )
}


