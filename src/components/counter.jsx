import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200"
    };

    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    render() { 
        return (
            <React.Fragment>
                <div><img src={ this.state.imageUrl } alt="Beautiful Image"/></div>
                <span style={ this.styles } className="badge badge-primary m-2">{ this.formatCount() }</span>
                <button style={{ fontSize: 50, margin: 20 }} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;