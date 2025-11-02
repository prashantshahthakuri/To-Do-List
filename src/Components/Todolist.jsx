import { use, useState } from "react";
import '../index.css'


function TodoList() {
  const [task, setTask] = useState(["Eat Breakfast", "Have a Coding Practice", "Learn different new things"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) =>{
    setNewTask(e.target.value)
  }

  const addTask = (e) => {
    if(newTask.trim() !== ""){     
    setTask(t=> [...t, newTask]);
    setNewTask("");
    }
  };
  const deleteTask = (index) =>{
    const updatedTask = task.filter((_,i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input 
            type="text" 
            placeholder="Add a New Task.." 
            value={newTask}
            onChange={handleInputChange} />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>
      <ol>
        {task.map((task,index) =>
            <li key={task}>
                <span className="text">{task}</span>
                <button className="delete-btn" onClick={() =>deleteTask(index)}>Delete</button>
            </li>
        )}
      </ol>
    </div>
  );
}

export default TodoList;
