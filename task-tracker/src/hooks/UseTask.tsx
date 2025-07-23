import { useState } from "react";
import type { Task } from "../models/Task";

export default function UseTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("1");
  const [status, setStatus] =  useState("Not Started");
  const [taskList, setTaskList] = useState<Task[]>([]);

  function AddTask() {
    console.log(taskList);
    const task = {title, description, dueDate, priority, status}
    setTaskList((t) => [...t,task]);
    console.log(taskList);
  }

  return { taskList, AddTask, setTitle, setDueDate, setDescription, setPriority, setStatus };
}
