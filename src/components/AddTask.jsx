import { useState } from "react";
import {FaPlus} from 'react-icons/fa'
import axios from "axios";
import { useAlert } from "react-alert";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss"


const AddTask = () => {
    const [task, setTask] = useState("")

    const alert = useAlert()

    const onChange = (e) => {
        setTask(e.target.value);
    }

    const handleTaskAddition = async () => {
        try {

            if (task.length === 0) {
                return alert.error("A tarefa precisa de uma descrição para ser salva");
            }
            await axios.post('https://fsc-task-manager-backend.herokuapp.com/tasks', {
                desciption: task,
                isCompleted: false
            });
        } catch (error) {
            
        }
    }

    return (
        <div className="add-task-container">
            <CustomInput label="Adicionar tarefa ..." value={task} onChange={onChange} />
            <CustomButton onClick={handleTaskAddition}> <FaPlus size={14} color="#ffff"/> </CustomButton>
        </div>
    )
}

export default AddTask;