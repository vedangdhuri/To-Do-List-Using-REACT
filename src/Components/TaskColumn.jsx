import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard.jsx";
const TaskColumn = ({ icon, columnName, tasks, status }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {columnName}
      </h2>

      {
        tasks.map((task, index) => {
          tasks.status === status &&
            <TaskCard key={index} columnName={task.task} tags={task.tags} />
        })
      }
    </section>
  );
};

export default TaskColumn;
