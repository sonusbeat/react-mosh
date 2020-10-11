import React, { Component } from "react";

class Counter extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log('########### Updated - Phase ###########');
    console.log('prevProps:', prevProps);
    console.log('prevState:', prevState);
    console.log('-'.repeat(45));

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get data from the server
      console.log('Fetching Ajax Request');
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmounted');
  }

  render() {
    console.log('Counter - Rendered');

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
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-secondary mr-2"
                >
                  +
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
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
