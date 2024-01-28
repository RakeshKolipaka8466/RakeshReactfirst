import { useState } from "react";
export const Hook1=()=>{
    const initialD=[
        {
            id:1,
            firstName:"Rakesh",
            lastName:"Kolipaka",
            age:31,

        },
        {
            id:2,
            firstName:"Ramesh",
            lastName:"Kollapuram",
            age:32,
        },
        {
            id:3,
            firstName:"Rajesh",
            lastName:"Perala",
            age:30,
        }
    ];
    const [data1,setData1]=useState(initialD);
    const handleDelete=(comingId)=>{
     const filterData=data1.filter((eachItem)=>{
            return eachItem.id!==comingId;
             });
    //  setData1(filterData);
    setData1(filterData);
    }
    return(
      <div className="main">
          {
            data1.map((item,index)=>{
                const {firstName,lastName,age,id}=item;
                return(
                 <ul>
                    <li key={index}>
                        <li>my first name is : <strong>{firstName}</strong></li>
                        <li>my last name is : <strong>{lastName}</strong></li>
                        <li>my age is : <strong>{age}</strong></li>
                        <button onClick={()=>handleDelete(id)}>Delete Data</button>
                    </li>
                 </ul>
                )
            })
          }
      </div>
    )
}