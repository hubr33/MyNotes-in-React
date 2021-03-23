import React, { Component } from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import CreateTask from "./components/CreateTask";
import NewTask from "./components/NewTask";

class App extends Component {
  state = {
    active: "false",
    text: "",
    activity: "",
    checked: "",
    id: 0,
    list: [],
    color: "",
    select: "selected",
  };

  handleActive = () => {
    this.setState({
      active: true,
    });
  };

  componentDidMount = () => {
    this.setState({
      active: false,
    });
  };

  handleDeactive = () => {
    this.setState({
      active: false,
      checked: "",
    });
    const inputAddUp = document.querySelector(".inputText");
    const selector = document.querySelector("#category");
    inputAddUp.value = "";
    selector.value = 0;
  };

  handleText = (e) => {
    const text = e.target.value;
    this.setState({
      text: text,
    });
  };

  handleSelect = (e) => {
    const selectedValue = e.target.value;
    this.setState({
      activity: selectedValue,
    });
    if (selectedValue === "Praca") {
      this.setState({ color: "blue" });
      return;
    } else if (selectedValue === "Studia") {
      this.setState({ color: "orange" });
      return;
    } else if (selectedValue === "Spotkanie") {
      this.setState({ color: "yellow" });
      return;
    } else if (selectedValue === "Zakupy") {
      this.setState({ color: "green" });
      return;
    }
  };

  handleCheckbox = () => {
    if (this.state.checked === "") {
      this.setState({
        checked: "checked",
      });
    } else if (this.state.checked === "checked") {
      this.setState({
        checked: "",
      });
    }
  };

  handleAddNewTask = () => {
    if (this.state.text !== "" && this.state.activity !== "") {
      this.state.list.push({
        id: this.state.id,
        currentText: this.state.text,
        work: this.state.activity,
        important: this.state.checked,
        color: this.state.color,
      });
      this.setState({
        active: false,
        text: "",
        activity: "",
        checked: "",
        color: "",
        id: this.state.id + 1,
      });
      const inputAddUp = document.querySelector(".inputText");
      const selector = document.querySelector("#category");
      inputAddUp.value = "";
      selector.value = 0;
      const error = document.querySelector(".error");
      error.classList.remove("active");
    } else {
      const error = document.querySelector(".error");
      error.classList.add("active");
    }
  };

  render() {
    const isActive = this.state.active;
    const newObject = this.state.list.map((user) => (
      <NewTask
        id={user.id}
        text={user.currentText}
        work={user.work}
        check={user.important}
        color={user.color}
      />
    ));
    return (
      <React.Fragment>
        <CreateTask
          active={isActive}
          deactive={this.handleDeactive}
          onchange={this.handleText}
          activity={this.handleSelect}
          checkbox={this.handleCheckbox}
          checked={this.state.checked}
          addNewTask={this.handleAddNewTask}
          select={this.state.select}
        />
        <header>
          <h1>
            <i className="fas fa-tasks"></i>
            ToDoList
            <AddButton click={this.handleActive} />
          </h1>
        </header>
        <main>{newObject}</main>
      </React.Fragment>
    );
  }
}

export default App;
