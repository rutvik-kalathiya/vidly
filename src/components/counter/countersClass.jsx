import React, { Component } from 'react'
import CounterClassComponent from "./counterClassComponent";

class CountersClass extends Component {
    state = { 
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0}
        ]
     } 
    
    handleReset = () => {
        const counters = this.state.counters.map(c => { 
            c.value = 0;
            return c; 
        })
        this.setState ( { counters } )
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState( {counters})
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState( {counters})
    }
     
    render() { 
        return (
            <div className='component'>
                <h4>Counter using class component</h4>
                <button className="btn btn-primary btn-sm m-2" onClick={ this.handleReset  }>Reset</button>
                {this.state.counters.map(counter => 
                    <CounterClassComponent key={counter.id} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement} />
                )}
            </div>
        );
    }
}
 
export default CountersClass;