import { useState } from "react"
import './css/tasks.css'

function Notes() {
    // generating list of toDos
    let [to_do, set_to_do] = useState([
        {task: "Remove tasks by clicking on them !!", id: 1},
    ])
    // helper function to remove task from the list
    const handleClickRemoveToDo = (ind) => {
        set_to_do(to_do.filter((task, i) => {
            return i !== ind
        }))
    }

    // helper function to add task into the list
    const handleClickAddToDo = (task) => {

        let new_task = {task: task, id : Math.random().toString(36).substr(2, 9)}
        let x = [...to_do]
        x.push(new_task)
        set_to_do(x)
    }

    // rendering the tasks
    return (
        <div className="inner-flex">

                <input className="input-task-field" placeholder="Enter Task" id="new_task"></input>

                <button className="task-add-button" 
                    onClick={() => {
                            handleClickAddToDo(document.getElementById("new_task").value)
                 }}>
                Add Task
                </button>

                {
                    to_do.map((task) => {
                        return (
                            <div className="task-container">
                                <div 
                                    type="checkbox" 
                                    onClick={() => {
                                        handleClickRemoveToDo(to_do.findIndex(curr => {
                                            return curr === task
                                        }))
                                    }}
                                    key = {task.id}
                                    className="task-name"
                                >
                                        {task.task}
                                </div>
                        </div>
                )})}
            
            
        </div>
    )}

export default Notes
