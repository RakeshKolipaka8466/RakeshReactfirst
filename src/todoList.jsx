import { useState } from "react";

export const ToDoList=()=>{
    // const tempList=[{
    //     text:"Hello Wp",
    //     id:2,
    // },
    // {
    //     text:"Hi Wp",
    //     id:3,
    // }];
    const [list,setList]=useState([]);
    const [msg,setmsg]=useState({text:"",id:0 });
    const [editingList,setEditingList]=useState({
        isEditing:false,
        id:"",
    })
     const handleMsg=(e)=>{
     setmsg({
        ...msg,
        text:e.target.value,
     });
         } 
     const handleSubmit=(e)=>{
        e.preventDefault();
        const newToDo={
            text:msg.text,
            id:new Date().getTime().toString(),

        };
        setList([...list,newToDo]);
        setmsg({
            text:"",
            id:0,
        })
        console.log(newToDo);
       
     } 
     const handleDelete=(id)=>{
       let newtodos= list.filter((item)=>{
          return item.id!==id;
        })
        setList(newtodos);
     }

     const handleEditState=(id)=>{
        console.log(id);
        setEditingList({
            ...editingList,
            id:id,
            isEditing:true,
        });
        let findItem=list.find((item)=>item.id===id);
        setmsg({
            ...msg,
            text:findItem.text,
            id:findItem.id,
        });
        console.log(findItem);
     }
     const handleEdit=(e)=>{
    e.preventDefault();
    const newtoList=list.map((item)=>{
        if(item.id===editingList.id){
          return {
            text:msg.text,
            id:editingList.id,
            }
        }else{
            return item;
        }
    });
    setList(newtoList);
    setmsg({
        text:"",
        id:0,
    })
    setEditingList({
        id:0,
        isEditing:false,
    })
     }
        
    return(
        <div className="maain">
            <form>
            <input type="text" name="msg" id="msg"placeholder="enter your text"
            value={msg.text} onChange={handleMsg} />

            {
                editingList.isEditing ? (<button onClick={handleEdit} type="submit">Edit</button>) : (<button onClick={handleSubmit} type="submit">Add</button>)
            }
            
            </form>
            <hr />
            {
                list.length===0 && <h3>there is no items in the list</h3>
            }
            <ul>
                {
                        list.map((item)=>{
                        const {text,id}=item;
                        return(
                            <li key={id}>
                                <span>{text}</span>
                                <button onClick={()=>handleEditState(id)}>Edit</button>
                                <button onClick={()=>handleDelete(id)}>Delete</button>
                            </li>
                             ) })
                }
            </ul>
        </div>
    )
}