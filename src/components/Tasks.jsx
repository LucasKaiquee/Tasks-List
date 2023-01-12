import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss"

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () =>{
    const [tasks, setTasks] = useState([]);
    
      const fetchTasks = async () => {
        try{
          const {data} = await axios.get('https://fsc-taskmanager-api.up.railway.app/tasks');

          setTasks(data);
        } catch(error) {
          console.log(error);
        }
      }
    
      useEffect(() =>{
        fetchTasks()
      }, [])
    

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
            <h3>Últimas Tarefas </h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem task ={lastTask} fetchTasks={fetchTasks}/>
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted).map(completedTask =>(
                        <TaskItem task ={completedTask} fetchTasks={fetchTasks}/>
                    ))}
                </div>
            </div>
        </div>
    )
        
}

export default Tasks