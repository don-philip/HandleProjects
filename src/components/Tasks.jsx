import { useState } from "react"
function Tasks({onAdd, onDelete, tasks}){
    const [enteredTask,setEnteredTask]=useState('');
    function handleChange(event){
        setEnteredTask(event.target.value)
    }
    function handleClick(){
        onAdd(enteredTask)
        setEnteredTask('')
    }
    return(
    <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
        <div className="flex items-center gap-4">
            <input value={enteredTask} onChange={handleChange} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={handleClick} className="px-3 py-1 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950">Add Task</button>
        </div>
        {tasks.length===0 && <p className="text-stone-800 my-4">This Project does not have any task yet</p>}
        {tasks.length>0 && 
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task)=>
                    <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button onClick={()=>{onDelete(task.id)}} className="px-3 py-1 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950 hover:text-red-500">Clear Task</button>
                    </li>
                )}
            </ul>
        }
    </section>
    )
}
export default Tasks