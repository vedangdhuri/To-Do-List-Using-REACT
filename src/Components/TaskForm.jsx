import React, { useState } from "react";
import Tag from "./Tag.jsx";
import "./TaskForm.css";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("todo")

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  }
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your Task"
          onChange={handleTaskChange}
        />
        <div className="task_form_button_line">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
          <Tag tagName="JavaScript" />
          <Tag tagName="React" />
          <Tag tagName="Python" />
          <Tag tagName="Java" />
          <div>
            <select className="task_status">
              <option value="todo">To Do</option>
              <option value="doing">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <button type="submit" className="task_submit">
            + Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
