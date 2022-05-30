import React from "react";

export interface ITodoData {
  id?: string;
  title: string;
  description: string;
  remind?: boolean;
  remindInterval?: number;
  deadline?: Date;
}

export interface ITodo {
  data: ITodoData;
}

export class Todo extends React.Component<ITodoData, ITodo> {
  state: ITodo;

  constructor(props: ITodoData) {
    super(props);
    this.state = {
      data: props
    };
  }

  render() {
    return (
      <div className="Todo">
        <h3>{this.state.data.title}</h3>
        <p>{this.state.data.description}</p>
      </div>
    );
  }
}

export class TodoCollection extends React.Component<ITodo[], ITodo[]> {}
