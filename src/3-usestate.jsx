import { useState } from "react"
export const ShowHideData=()=>{
    const [showData,setShowData]=useState(false);
    const handleData=()=>{
        setShowData(!showData);
    }
    return(
        <div className="main">
            <button onClick={handleData}>{showData? "Hide" : "Show"}</button>
          {
             showData ?  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sed molestiae aut ipsa perferendis quasi vero, minima voluptate reprehenderit sequi quia nam eaque. Molestiae corrupti incidunt ip Omnis!</p> : <h2>Data is Hidden</h2>
          }
        </div>
    )
}