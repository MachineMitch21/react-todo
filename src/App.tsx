import React from "react";
import "./common/style/variables.css";
import * as Nav from "./model/navigation/navigation";
import * as Todos from "./model/todo/todo";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav.Navigation />
        <Todos.Todo title="Test Title" description="Test Description" />
      </div>
    );
  }
}
