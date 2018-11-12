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

  onDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(co => (
          <Counter key={co.id} onDelete={this.onDelete} counter={co} />
        ))}
        {/*<Counter<h1>Hello</h1> </Counter>*/}
      </div>
    );
  }
}

export default Counters;
