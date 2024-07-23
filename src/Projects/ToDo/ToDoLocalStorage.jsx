

const ToDokey = "reactToDo";


export const getLocalStorageGetData=()=>{
    const rawToDo = localStorage.getItem(ToDokey)
        if (!rawToDo) return [];
        return JSON.parse(rawToDo)
}

export const setLocalStorageGetData=(task)=>{
    return localStorage.setItem(ToDokey, JSON.stringify(task))
}