import React, {useState} from "react";
import TaskForm from "./Components/TaskForm.jsx";
import "./App.css";
import TaskColumn from "./Components/TaskColumn.jsx";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";


const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks}/>
      <main className="app_main">
        <TaskColumn columnName="To Do" icon={todoIcon} tasks={tasks} status="todo"/>
        <TaskColumn columnName="In Progress" icon={doingIcon} tasks={tasks} status="doing"/>
        <TaskColumn columnName="Done" icon={doneIcon} tasks={tasks} status="done"/>
      </main>
    </div>
  );
};

export default App;
