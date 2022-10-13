import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss"

const Tasks = () =>{
    const [tasks, setTasks] = useState([]);
    
      const fetchTasks = async () => {
        try{
          const {data} = await axios.get('https://fsc-task-manager-backend.herokuapp.com/tasks');
          console.log(data)
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
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <p>{lastTask.description}</p>
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted).map(completedTask =>(
                        <p>{completedTask.description}</p>
                    ))}
                </div>
            </div>
        </div>
    )
        
}

export default Tasks