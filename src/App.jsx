import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { task: "吃早餐", isDone: false },
    { task: "帶便當", isDone: false },
    { task: "上班打卡", isDone: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim()) {
      setTasks((tasks) => [...tasks, { task: newTask, isDone: false }]);
      setNewTask("");
    }
  }

  function editTask(index) {}

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  function moveTaskDwon(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1 className="title">備忘清單</h1>
      <div>
        <input
          type="text"
          placeholder="輸入事項..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          新增
        </button>
      </div>
      <ol>
        {tasks.map((item, index) => (
          <li key={index}>
            <span className="text">{item.task}</span>
            <button className="edit-btn" onClick={() => editTask(index)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="move-btn" onClick={() => moveTaskDwon(index)}>
              <i class="fa-solid fa-arrow-down"></i>
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              <i class="fa-solid fa-arrow-up"></i>
            </button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
