import type { FormEvent } from "react";

interface TaskFormProps {
  AddTask: (event: FormEvent<Element>) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setDueDate: (dueDate: string) => void;
  setPriority: (priority: string) => void;
  setStatus: (status: string) => void;
}

export default function TaskForm({
  AddTask,
  setTitle,
  setDescription,
  setDueDate,
  setPriority,
  setStatus,
}: TaskFormProps) {
  return (
    <div className="bg-white">
      <form className="grid grid-flow-row" onSubmit={AddTask}>
        <h2 className="mx-2 mb-4 font-semibold text-base"> Create new task</h2>
        <label className="text-xs px-4 text-gray-500">Title</label>
        <input
          title="Title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="text-sm m-2 block w-full max-w-xs h-10 px-4 py-2 rounded-lg text-blue-950 border border-gray-300 focus:outline-none font-sans border-solid"
        ></input>
        <label className="text-xs px-4 text-gray-500">Description</label>
        <input
          title="Description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="text-sm m-2 block w-full max-w-xs h-10 px-4 py-2 rounded-lg text-blue-950 border border-gray-300 focus:outline-none font-sans border-solid"
        ></input>
        <label className="text-xs px-4 text-gray-500">Due Date</label>
        <input
          title="Due Date"
          onChange={(e) => setDueDate(e.target.value)}
          placeholder=" Enter Due Date"
          className="text-sm m-2 block w-full max-w-xs h-10 px-4 py-2 rounded-lg text-blue-950 border border-gray-300 focus:outline-none font-sans border-solid"
          type="date"
        ></input>
        <label className="text-xs px-4 text-gray-500">Priority</label>
        <select
          onChange={(e) => setPriority(e.target.value)}
          title="Priority"
          className="text-sm m-2 block w-full max-w-xs h-10 px-4 py-2 rounded-lg text-blue-950 border border-gray-300 focus:outline-none font-sans border-solid"
        >
          <option value={1}>1</option>
          <option value={1}>2</option>
          <option value={1}>3</option>
        </select>
        <label className="text-xs px-4 text-gray-500">Status</label>
        <select
          title="Status"
          onChange={(e) => setStatus(e.target.value)}
          className="text-sm m-2 block w-full max-w-xs h-10 px-4 py-2 rounded-lg text-blue-950 border border-gray-300 focus:outline-none font-sans border-solid"
        >
          <option value={1}>Not Started</option>
          <option value={1}>In Progress</option>
          <option value={1}>Completed</option>
        </select>
        <button
          type="submit"
          className="justify-start mr-24 ml-2 my-5 p-2 border border-gray-800 rounded-md bg-blue-800 text-white"
        >
          Create
        </button>
      </form>
    </div>
  );
}
