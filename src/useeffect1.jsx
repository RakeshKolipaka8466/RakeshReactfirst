import { useEffect, useState } from "react"

export const UseEffecT=()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("iam USE Effect pgm");
    },[])
    return(
        <div className="main">
            <h3>Iam useeffect </h3>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}