import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row mb-2">

        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary mx-1"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </div>

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
