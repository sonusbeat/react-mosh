import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="mb-2">
        <table>
          <tbody>
            <tr>
              <td className="text-center" style={{ width: "80px" }}>
                <span className={this.getBadgeClasses()}>
                  {this.formatCount()}
                </span>
              </td>
              <td>
                <button
                  onClick={() => this.handleIncrement()}
                  className="btn btn-secondary mr-2"
                >
                  Increment
                </button>
                <button
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
