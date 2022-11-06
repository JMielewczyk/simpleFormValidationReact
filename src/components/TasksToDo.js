import React from "react";

const TasksToDo = ({ taskText, taskDate, priority, id, taskDone }) => {
  return (
    <>
      <div className="singleTaskWrapper">
        <strong>{taskText}</strong> - do {taskDate}
        <button onClick={() => taskDone(id)}>Zadanie wykonane X</button>
      </div>
    </>
  );
};

export default TasksToDo;
