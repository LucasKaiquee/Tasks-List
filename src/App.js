/*import {useState} from 'react'
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

  return (
    <>
       {tasks.map((task) => (
          <TaskItem key={task.id} task={task}/>
       ))}
    </>
  );
}

export default App;*/

import React from "react";
import TaskItem from "./components/TaskItem";
class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      tasks: [
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
      ]
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log('component was updated!')
  }

  handleStateChange() {
    this.setState({
      tasks: [] ,
    })
  }

  render() {
    return (
      <>
         {this.state.tasks.map((task) => (
            <TaskItem key={task.id} task={task}/>
         ))}
         <button onClick={this.handleStateChange}>Apagar</button>
      </>
    )
  }
}

export default App;
