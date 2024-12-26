
import { useEffect, useState } from 'react'
import './App.css'
import { TaskManagerContextProvider } from './contexts'
import TaskForm from './components/taskForm'
import TaskItem from './components/taskElement'

function App() {

const [tasks,setTasks]=useState([])
const addTask=(task)=>{
  setTasks((prev)=>[{id:Date.now(),...task},...prev])
}
const updateTask=(id,task)=>{
  setTasks((prev)=>prev.map((prevTask)=>(prevTask.id===id ? task: prevTask)))
}
const deleteTask=(id)=>{
  setTasks((prev)=>prev.filter((prevTask)=>prevTask.id!==id))
}
const toggleChecked=(id)=>{
  setTasks((prev)=>prev.map((prevTask)=>prevTask.id===id ? {...prevTask,isChecked:!prevTask.isChecked}:prevTask))
}
useEffect(()=>{
 const tasks=JSON.parse(localStorage.getItem("tasks"))
 if (tasks && tasks.length>0) {
  setTasks(tasks)
 }
},[])
useEffect(()=>{localStorage.setItem("tasks",JSON.stringify(tasks))},[tasks])
return (
<TaskManagerContextProvider value={{tasks,addTask,updateTask,deleteTask,toggleChecked}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Tasks</h1>
                    <div className="mb-4">
                        {/* Task form goes here */} 
                    <TaskForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TaskItem here */}
                        {tasks.map((task)=>(
                          <div key={task.id} className='w-full'>
                            <TaskItem task={task}/>
                          </div>
                        ))}
                    </div>
                </div>
</div>
</TaskManagerContextProvider>
  )
}

export default App
