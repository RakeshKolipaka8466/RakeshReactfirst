import { useState } from "react";
export const Hhook=()=>{
    const initial={
        firstName:"Rakesh",
        lastName:"Kolipaka",
        age:31,
        emp:"Wipro",
    }
    const [data,setData]=useState(initial);
    const handlechangefirstName=()=>{
       
        setData({
            ...data,
            firstName:"Srikanth"});
    }
    const handlechangesecondName=()=>{
       setData({
        ...data,
        lastName:"Racharla"});
    }
    return(
        <div className="main">
        <h2>my first name is : {data.firstName}</h2>
        <button onClick={handlechangefirstName}>changefirstName</button>
        <h2>my last name is:{data.lastName}</h2>
        <button onClick={handlechangesecondName}>changelastName</button>
        <h2>my age is :{data.age}</h2>
        <h2>my company name is :{data.emp}</h2>
        </div>
    )
}