import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../Assets/delete.png";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text"> This is Sample Test.</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML"/>
          <Tag tagName="CSS"/>
        </div>
        <div className="task_delete">
          <img src={deleteIcon} alt="" className="delete_icon"/>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
