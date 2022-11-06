import React from "react";

const TasksDone = ({ id, taskText, taskDate }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <>
      <div>
        <p>
          {taskText} - zrobić do : {taskDate}
          Potwierdzenie wykonania: {day} : {month} : {year}
        </p>
      </div>
    </>
  );
};

export default TasksDone;
