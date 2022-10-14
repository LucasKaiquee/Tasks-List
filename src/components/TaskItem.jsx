import './TaskItem.scss'
import { AiFillDelete } from 'react-icons/ai';

const TaskItem = ({task}) => {


    return(
      <div className="task-item-container">
            <div className="task-description">
                <label className={
                    task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'
                }>
                    {task.description}
                    <input type="checkbox" 
                        defaultChecked={task.isCompleted}
                    />
                    <span className={task.isCompleted ? ' completed' : 'checkmark'}></span>
                </label>
            </div>

            <div className="delete">
                <AiFillDelete size={18} color="#F97474" />
            </div>
      </div>
    )
}

export default TaskItem;


