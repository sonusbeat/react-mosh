import React, { Component } from "react";

class Counter extends Component {
	state = {count: 0};

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	handleIncrement = () => {
		// Returns a reference for the object
		// object.method();

		// is "strict mode" is enabled returns undefined
		// because points to the global object or window object
		// function();

		console.log("Increment Clicked", this);
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={this.handleIncrement} className="btn btn-secondary">
					Increment
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
