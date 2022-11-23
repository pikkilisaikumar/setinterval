import React, { Component } from "react";

class ClassComponent extends Component {
  state = { count: 0, date: new Date() };

  componentDidMount() {
    const { count } = this.state;
    this.timerId = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 1000);
  }

  render() {
    const { count, date } = this.state;
    return (
      <div>
        <h1>Class Component {count}</h1>
        <h1>The time {date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default ClassComponent;
