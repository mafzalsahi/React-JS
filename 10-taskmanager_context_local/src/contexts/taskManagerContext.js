import { createContext, useContext } from "react";


export const TaskManagerContext=createContext({
    tasks:[
        {
        id:1,
        taskName:" Task Message 1",
        isChecked:false
    }
],
addTask:(task)=>{},
updateTask:(id,taskName)=>{},
deleteTask:(id)=>{},
toggleChecked:(id)=>{}

})

export const useTaskManagerContext=()=>{return useContext(TaskManagerContext) }

export const TaskManagerContextProvider=TaskManagerContext.Provider