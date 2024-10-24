import { useEffect, useState } from "react"
import TaskList from "./components/TaskList"
import axios from 'axios'

function App() {

  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    // axios.get('http://localhost:####/tasks') 
    // .then(response => {
    //   setTasks(response.data);
    // })
    // .catch(e => {
    //   console.error(e);
    // })
    const mockTasks = [{
      id: 1,
      title: "Complete project report",
      description: "Finish the final section and proofread.",
      status: "IN_PROGRESS",
      priority: "HIGH",
      dueDate: "2024-10-30T17:00:00",
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Get milk, eggs, and bread.",
      status: "TO_DO",
      priority: "MEDIUM",
      dueDate: "2024-10-25T12:00:00",
    },
    {
      id: 3,
      title: "Schedule meeting with team",
      description: "Set up a Zoom meeting to discuss project milestones.",
      status: "TO_DO",
      priority: "URGENT",
      dueDate: "2024-10-22T09:00:00",
    },
  ];
  setTimeout(() => {
    setTasks(mockTasks);
  }, 1000);
  }

  useEffect(() => {
    fetchTasks();

    const intervalId = setInterval(fetchTasks, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
