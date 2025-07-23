import TaskForm from "../components/TaskForm/TaskForm";
import UseTask from "../hooks/UseTask";
import TaskDetail from "./TaskDetail";

export default function Dashboard() {
  const { taskList } = UseTask();
  return (
    <div className="">
      <h1 className="p-4 font-semibold font-sans text-2xl">
        Task Tracker
      </h1>
      <div className="grid grid-flow-col">
        <div className="p-4">
          <TaskForm></TaskForm> 
        </div>
        {taskList.length === 0 && 
        <div>
            <p className="py-4 font-semibold"> Welcome Audrey,</p>
        <p className="m-20 p-20"> Congratulations, you have no tasks </p></div>}
        {taskList.length > 0 && (
          <div>
            <div className="grid grid-cols-5 gap-4 p-4">
              <p className="p-2">Task</p>
              <p className="p-2">Description</p>
              <p className="p-2">Due Date</p>
              <p className="p-2">Priority</p>
              <p className="p-2">Status</p>
            </div>
            <div>
              {taskList.map((t) => (
                <TaskDetail key={t.title} task={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
