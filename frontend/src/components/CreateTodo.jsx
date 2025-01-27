import { useState } from "react";

function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    function updateTitle(e){
        setTitle(e.target.value);
    }
    function updateDescription(e){
        setDescription(e.target.value);
    }
    //should not use fetch,,have to use useEffect hook
    function addTodo(){
        fetch("http://localhost:3000/addTodos/",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                title:title,
                description:description
            })
        }).then((responce)=>{
            return responce.json();
        }).then(()=>{
            alert("Todo Added");
        })
    }


    return (
        <div>
            <input style={{border:10, padding:10,margin:10}} type="text" placeholder="Enter Title" onChange={updateTitle}></input><br/>
            <input style={{border:10, padding:10,margin:10}} type="text" placeholder="Enter description" onChange={updateDescription}></input><br/>
            <button style={{border:10, padding:10,margin:10}} onClick={addTodo}>Add Todo</button>

        </div>
    )
}

export default CreateTodo