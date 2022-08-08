import React, { Component } from "react";
import './App.css';
class App extends Component {
  state = {
    tasks: []
  }
  constructor() {
    super()
    for (let i = 0; i < localStorage.length; i++) {
      let nowKeyIs = localStorage.key(i);
      if (nowKeyIs.startsWith("todoTask")) {
        const task = {text: "", id: ""}
        const data = localStorage.getItem(`todoTaks${i}`)
        task.text = data.text;
        task.id = data.id;
        this.state.tasks.append(task)
      }
    }
  }
  AddTaskForm = (props) => {
    return (
      <div className="tasks__task" id={props.id}>
        <p id={props.id}>{props.text}</p>
        <div className="tasks__buket" id={props.id}></div>
      </div>
    )
  }
  render() {
    return (
      <div className="tasks">
        <div className="tasks__create">
          <input type="text" placeholder="Add new Task" className="tasks__input" />
          <input type="button" value="Add" className="tasks__upload" />
        </div>
      </div>
    )
  }
}

export default App;
