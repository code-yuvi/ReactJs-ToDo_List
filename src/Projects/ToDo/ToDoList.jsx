import { MdCheck, MdDeleteForever } from "react-icons/md"

export const ToDoList=({key,data, onHandleDeleteToDo, checked, onHandleCheckedToDo})=>{
    return(
        <li className="todo-item"> 
                            <span className={checked?"checkList":"noCheckList"}>{data}</span>
                            <button className="check-btn" onClick={()=>onHandleCheckedToDo(data)}><MdCheck /></button>
                            <button className="delete-btn" onClick={()=>onHandleDeleteToDo(data)}><MdDeleteForever /></button>
                            </li>
    )
}