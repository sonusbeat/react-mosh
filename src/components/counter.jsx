import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    render() { 
        return (
            <React.Fragment>
                <span>{ this.formatCount() }</span>
                <button className="btn btn-default btn-primary">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;