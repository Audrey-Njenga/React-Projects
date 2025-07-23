import type { Task } from "../models/Task";

interface TaskDetailProp{
    task: Task
}

export default function TaskDetail({task}: TaskDetailProp){
    return (
        <div className="grid grid-cols-5 gap-4 p-4">
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
            <p>{task.status}</p>
        </div>
    )
}