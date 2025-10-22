import React, { useState } from "react";
import Tag from "./Tag.jsx";
import "./TaskForm.css";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: []
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

  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag)
  }

  const selectTag = (tag) => {
    if (taskData.tags.some(item => item === tag)) {
      const filteredTags = taskData.tags.filter(item => item !== tag)
      setTaskData(prev => {
        return {
          ...prev, tags: filteredTags
        }
      })
    } else {
      setTaskData(prev => {
        return {
          ...prev, tags: [...prev.tags, tag]
        }
      })
    }
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
            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
            <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")}/>
            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
            <Tag tagName="Python" selectTag={selectTag} selected={checkTag("Python")}/>
            <Tag tagName="Java" selectTag={selectTag} selected={checkTag("Java")}/>
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
