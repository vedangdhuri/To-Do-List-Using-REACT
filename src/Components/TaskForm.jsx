import React, { useState } from "react";
import Tag from "./Tag.jsx";
import "./TaskForm.css";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo"
  })
  const handleChange = (e) => {
    const { name, value } = e.target.name

    setTaskData(prev => {
      return {
        ...prev, [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <header className="app_header">
      <form onClick={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter Your Task"
          onChange={handleChange}
        />
        <div className="task_form_button_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
            <Tag tagName="Python" />
            <Tag tagName="Java" />
          </div>

          <div>
            <select name="status" className="task_status" onChange={handleChange}>
              <option value="todo">To Do</option>
              <option value="doing">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
