import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counter = this.state.counters.filter(c => {
      c.id == counter;
      return c;
    });

    this.setState({ counters: counter + 1 });
    console.log("Increment Clicked:", this.state.value);
  };

  handleReset = () => {
    const count = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: this.setState.counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.state.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(co => (
          <Counter
            key={co.id}
            onDelete={this.handleDelete}
            counter={co}
            onIncrement={this.state.handleIncrement}
          />
        ))}
        {/*<Counter<h1>Hello</h1> </Counter>*/}
      </div>
    );
  }
}

export default Counters;
