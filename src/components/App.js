import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask.js";
import TasksToDo from "./TasksToDo.js";
import TasksDone from "./TasksDone.js";

class ToDoApp extends Component {
  state = {
    inputTextValue: "",
    inputDateValue: "",
    checkBoxValue: false,
    addTaskClicked: false,
    tasksLength: "",
  };
  handleOnChange = (e) => {
    if (e.target.name === "checkBox") {
      this.setState({
        [e.target.name]: !this.state.checkBoxValue,
      });
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  tasksDone = [];
  tasks = [];

  addTask = () => {
    const task = {
      taskText: this.state.inputTextValue,
      taskDate: this.state.inputDateValue,
      prioritized: this.state.checkBoxValue,
    };
    this.tasks.push(task);
    this.setState({
      tasksLength: this.tasks.length,
    });
  };
  moveToTaskDone = (id) => {
    this.tasksDone.push(this.tasks[id]);
    this.tasks.splice(id, 1);
    this.setState({
      tasksLength: this.tasks.length,
    });
  };

  render() {
    const { inputDateValue, inputTextValue, checkBoxValue } = this.state;
    const tasks = this.tasks.map((task, index) => (
      <TasksToDo
        key={Math.floor(Math.random() * 100000)}
        id={index}
        taskText={task.taskText}
        taskDate={task.taskDate}
        priority={task.prioritized}
        taskDone={this.moveToTaskDone}
      />
    ));
    const tasksDone = this.tasksDone.map((task, index) => (
      <TasksDone
        key={Math.floor(Math.random() * 100000)}
        id={index}
        taskText={task.taskText}
        taskDate={task.taskDate}
      />
    ));
    return (
      <>
        <AddTask
          textValue={inputTextValue}
          dateValue={inputDateValue}
          checkBoxValue={checkBoxValue}
          handleOnChange={this.handleOnChange}
          addTask={this.addTask}
        />
        <div className="tasksWrapper">
          <h2>Zadania do wykonania :</h2>
          {this.tasks.length === 0 ? null : tasks}
        </div>
        {this.tasksDone.length === 0 ? null : (
          <h3>Zadania wykonane {this.tasksDone.length}</h3>
        )}
        {this.tasksDone.length === 0 ? null : tasksDone}
      </>
    );
  }
}

export default ToDoApp;
