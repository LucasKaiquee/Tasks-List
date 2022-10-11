import {useState, useEffect} from 'react'
import axios from 'axios'

import TaskItem from './components/TaskItem';

const  App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Estudar programação',
      isCompleted: false,
    },
    {
      id: 2,
      description: 'Estudar Enem',
      isCompleted: true,
    }
  ]);

  const fetchTasks = async () => {
    try{
      const {data} = await axios.get('https://fsc-task-manager-backend.herokuapp.com/tasks');
      
      setTasks(data);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    fetchTasks()
  }, [])


  return (
    <>
       {tasks.map((task) => (
          <TaskItem key={task.id} task={task}/>
       ))}
    </>
  );
}

export default App;
