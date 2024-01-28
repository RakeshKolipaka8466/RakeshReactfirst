import { useState } from "react"
export const Form=()=>{
    const [firstName,setFirstName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    // const handleName=(e)=>{
    //    // console.log(e.target.value);
    //     setFirstName(e.target.value);
    // }
    // const handleEmail=(e)=>{
    //    // console.log(e.target.value);
    //     setEmail(e.target.value);
    // }
    // const handlePassword=(e)=>{
    //    // console.log(e.target.value);
    //     setPassword(e.target.value);
    // }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const userData={
            firstName:firstName,
            email:email,
            password:password,
        }
        console.log(userData);
    }
    return(
        
        <div className="main">
            <form onSubmit={handleSubmit}>
                <div>
                    
                <input type="text" name="firstName" id="firstName"
                onChange={(e)=>setFirstName(e.target.value)} 
                value={firstName} placeholder="enter your name" />
                </div>
                <div>
                    <input type="email" name="email" id="email"
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email} placeholder="enter your email" />
                </div>
                <div>
                    <input type="password" name="password" id="password" 
                  onChange={(e)=>setPassword(e.target.value)}
                    value={password} placeholder="enter your password"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}