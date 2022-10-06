const TaskItem = ({task}) => {
    return(
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? 'Completa' : 'incompleta'}</p>
        </>
    )
}

export default TaskItem;