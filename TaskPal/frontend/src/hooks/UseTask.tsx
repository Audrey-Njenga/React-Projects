import { useState, type FormEvent } from "react";
import type { Task } from "../models/Task";

export default function UseTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("1");
  const [status, setStatus] =  useState("Not Started");
  const [taskList, setTaskList] = useState<Task[]>([]);

  function AddTask(event: FormEvent) {
    event.preventDefault();
    const task: Task = {title:title, description:description, dueDate:dueDate, priority:priority, status:status}
    setTaskList((t) => [...t,task]);  
  }

  return { taskList, AddTask, setTitle, setDueDate, setDescription, setPriority, setStatus };
}
