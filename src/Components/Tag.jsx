import React from "react";
import "./Tag.css";
const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#E34C26", color: "#FFFFFF" },
    CSS: { backgroundColor: "#2965F1", color: "#FFFFFF" },
    JavaScript: { backgroundColor: "#C9A227", color: "#FFFFFF" },
    Python: { backgroundColor: "#3776AB", color: "#FFFFFF" },
    Java: { backgroundColor: "#E76F00", color: "#FFFFFF" },
    default: { backgroundColor: "#2D333B", color: "#8B949E" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;


