import React, { Component } from 'react';
import './counter.css';

class CounterClassComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='center'>
                    {this.props.children}
                    <div className='component-btn'>
                        <span className={`badge m-2 badge-${this.getBadgeClasses()}`}>{ this.fortmatCount()}</span>
                        <button onClick ={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                    </div>
                    <br />
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes ='';
        classes += (this.props.counter.value % 2) === 0 ? 'warning' :  'primary';
        return classes
    }

    fortmatCount() {
        return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    }

}
export default CounterClassComponent;