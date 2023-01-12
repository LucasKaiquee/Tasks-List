import './TaskItem.scss'

import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import {useAlert} from 'react-alert'

const TaskItem = ({task, fetchTasks}) => {
    const handleTaskDeletion = async() => {
        try {
            await axios.delete(`https://fsc-taskmanager-api.up.railway.app/tasks/${task._id}`)
            await fetchTasks();
            alert.success("A tarefa foi deletado com sucesso.");
        } catch (error) {
            alert.error("Ops! Algo deu errado.");
        }
    }

    const handleTaskCompletionChange = async(e) => {
        try {
            await axios.patch(`https://fsc-taskmanager-api.up.railway.app/tasks/${task._id}`, {
                isCompleted: e.target.checked,
            });

            await fetchTasks();
            alert.success("A tarefa foi modificada com sucesso.");
        } catch (error) {
            alert.error("Ops! Algo deu errado.");
        }
    };

    return(
      <div className="task-item-container">
            <div className="task-description">
                <label className={
                    task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'
                }>
                    {task.description}
                    <input type="checkbox" 
                        defaultChecked={task.isCompleted}
                        onChange={handleTaskCompletionChange}
                    />
                    <span className={task.isCompleted ? ' completed' : 'checkmark'}></span>
                </label>
            </div>

            <div className="delete">
                <AiFillDelete size={18} color="#F97474" onClick={(e) => handleTaskCompletionChange(e)}/>
            </div>
      </div>
    )
}

export default TaskItem;


