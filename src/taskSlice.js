import { createSlice } from '@reduxjs/toolkit'

const initialState={
    taskList:[],
    selectedTask:{}
}

const taskSlice = createSlice(
    {
        name:"taskSlice",
        initialState,
        reducers:{
            addTaskList:(state,action)=>{
                const id=Math.random()*100
                let task={...action.payload,id}
                state.taskList.push(task)
            },
            removeTaskList:(state,action)=>{
                state.taskList=state.taskList.filter(((task)=>task.id !==action.payload.id))
            },
            updateTaskList:(state,action)=>{
                state.taskList=state.taskList.map((task)=>
                    task.id === action.payload.id? action.payload:task
                )
            },
            setselectedTask:(state,action)=>{
                state.selectedTask=action.payload
            }
        }
    })

    export const{addTaskList,removeTaskList,updateTaskList,setselectedTask}=taskSlice.actions

    export default taskSlice.reducer