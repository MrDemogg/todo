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
}

export default App;
