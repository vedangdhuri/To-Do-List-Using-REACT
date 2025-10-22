import React from "react";
import Tag from "./Tag.jsx";
import "./TaskForm.css";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your Task"
        />
        <div className="task_form_button_line">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
          <Tag tagName="JavaScript" />
          <Tag tagName="React" />
          <Tag tagName="Python" />
          <Tag tagName="Java" />

          <select className="task_status">
            <option value="todo">To Do</option>
            <option value="doing">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button type="submit" className="task_submit">
            + Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
