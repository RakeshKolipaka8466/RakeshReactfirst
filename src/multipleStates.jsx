import { useState } from "react";
export const Multiplesta=()=>{
    const [name,setName]=useState("Rakesh");
    const [add,setAdd]=useState("Wgl");
    const [emp,setEmp]=useState("Wipro");
    const HandleChangeName=()=>{
        setName("Raki");
    }
    const HandleChangeAddress=()=>{
        setAdd("Warangal");
    }
    const HandleChangeEmp=()=>{
        setEmp("Wipro Ltd");
    }
    return(
        <div className="main">
            <ul>
                <li>my name is : {name}</li>
                <button onClick={HandleChangeName}>change name</button>
                <li>my address is : {add}</li>
                <button onClick={HandleChangeAddress}>change address</button>
                <li>employee of : {emp}</li>
                <button onClick={HandleChangeEmp}>change company</button>
            </ul>
        </div>
    )
}