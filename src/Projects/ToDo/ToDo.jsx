import { useState } from "react"
import "./ToDo.css"
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDate } from "./ToDoDate";
import { getLocalStorageGetData, setLocalStorageGetData } from "./ToDoLocalStorage";




const ToDo = () => {
    const [task, setTask] = useState (()=>getLocalStorageGetData());

    const handleFormSubmit=(inputValue)=>{
        const {id, content, checked} = inputValue;

        if(!content){
            return
        }

        // if(task.includes(inputValue)){
        //     return;
        // }
        const ifToDoContentMatched = task.find((curTask)=>
        curTask.content===content
        )
        if(ifToDoContentMatched){
            return;
        }

        setTask((prevData)=>[...prevData, {id,content,checked}]); 
    }

    setLocalStorageGetData(task)
    


    const handleDeleteTodo=(value)=>{
        // console.log(task)
        // console.log(value)
        const updateTask = task.filter((curTask)=>curTask.content !== value)
        setTask(updateTask)
    }

    const handleClearTodoData=()=>{
        setTask([])
    }
    
    const onHandleCheckedToDo=(content)=>{
        const updateTask = task.map((curTask)=>{
            if(curTask.content===content){
                return {...curTask, checked:!curTask.checked}
            }
            return curTask;  
        })
        setTask(updateTask)
    }

    return (
    <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <ToDoDate />
        </header>
        <ToDoForm onAddToDo={handleFormSubmit} />
        <section className="myUnorderList">
            <ul>
                {
                    task.map((curTask, index)=>{
                        return(
                            <ToDoList key={curTask.id} data={curTask.content} onHandleDeleteToDo={handleDeleteTodo} checked={curTask.checked} onHandleCheckedToDo={onHandleCheckedToDo}/>
                        )
                    }
                )}
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClearTodoData}>Clear</button>
        </section>
    </section>
    )
}

export default ToDo