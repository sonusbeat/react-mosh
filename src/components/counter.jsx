import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1 className="text-center bg-dark text-white py-3">
                    Counter Component
                </h1>
                <button className="btn btn-default btn-primary">Increment</button>
            </React.Fragment>
        );
    }
}
 
export default Counter;