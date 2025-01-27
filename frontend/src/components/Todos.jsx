import { useState } from "react";

function Todos({todos}){
    return(
        <div>
            {todos.map((todo)=>{
                return <div>
                    <h5>{todo.title}</h5>
                    <p>{todo.description}</p>
                    <p>{todo.completed?"Completed":"Incomplete"}</p>
                </div>
            })}
        </div>
    )
}

export default Todos