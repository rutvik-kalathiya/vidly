import React, { Component } from 'react';
import './counter.css';

class CounterClassComponent extends Component {
    state = { 
        counter : 0,
        tags: [ 'tag0']
     } 
    handleIncrement =  ()  => {
        this.setState( { counter: this.state.counter + 1, tags: [...this.state.tags, `tag ${this.state.counter + 1}`] } );
    };

    rederTags() {
         if(this.state.tags.length === 0) return <p>There are no Taggs!</p>

         return <div className='tags'>{ this.state.tags.map(tag => <li key={tag}> {tag}</li>) }</div>
    }

    render() {
        return (
            <React.Fragment>
                <div className='component-header'>
                    <h2>Counter using class component</h2>
                    <div className='component-btn'>
                        <span className={`badge m-2 badge-${this.getBadgeClasses()}`}>{ this.fortmatCount()}</span>
                        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
                    </div>
                    {this.state.tags.length === 0 && 'Please Create a Tags!'}
                    {this.rederTags()}
                    <br />
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes ='';
        classes += (this.state.counter % 2) === 0 ? 'warning' :  'primary';
        return classes
    }

    fortmatCount() {
        return this.state.counter === 0 ? "zero" : this.state.counter;
    }

}
export default CounterClassComponent;