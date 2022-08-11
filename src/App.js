import React, { Component } from "react";
import './App.css';
class App extends Component {
  state = {
    tasks: [{text: 'Buy milk', id: 0}, {text: 'Walk with dog', id: 1}, {text: 'Do homework', id: 2}],
    newTaskText: 0
  }
  AddTaskForm = () => {
    let getId = 0
    for (let i = 0; i < this.state.tasks.length; i++) {
      getId = i + 1
    }
    const newTasks = this.state.tasks;
    newTasks.push({text: this.state.newTaskText, id: getId})
    this.setState({
      tasks: newTasks
    })
  }
  currentTask = (event) => {
    this.setState({
      newTaskText: event.currentTarget.value
    })
  }
  DelTaskForm = (event) => {
    const newTasks = this.state.tasks;
    console.log(event.currentTarget.id)
    for (let i = 0; i < newTasks.length; i++) {
      console.log(newTasks[i].id)
      if (newTasks[i].id == event.currentTarget.id) {
        newTasks.splice(i, 1)
      }
    }
    this.setState({
      tasks: newTasks
    })
  }
  Task = (props) => {
    return (
      <div className="tasks-menu__task" id={props.id}>
        <div className="tasks-menu__content">
          {props.text}
          <button className="tasks-menu__buket" onClick={this.DelTaskForm} id={props.id}></button>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="tasks-menu">
        <div className="tasks-menu__create">
          <input type="text" className="tasks-menu__input" placeholder="Input text" />
            <button className="tasks-menu__upload" onClick={() => this.currentTask()}>Add</button>
        </div>
        <div className="tasks-menu__tasks">
          {this.state.tasks.map((task) => {
            return <this.Task text={task.text} id={task.id}></this.Task>
          })}
        </div>
      </div>
    )
  }
}

export default App;
