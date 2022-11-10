import React  from 'react'
import { useState } from 'react';
import CounterFunctionalComponent from './counterFunctionalComponent'

function CounterFunctional() {

  const [state, setState ] = useState( { counters: [
    {id: 1, value: 0 },
    {id: 2, value: 0 },
    {id: 3, value: 0 },
    {id: 4, value: 0 },
  ] }
  );

  const handleReset = () => {
    const counters = state.counters.map(c => { 
        c.value = 0;
        return c; 
    })
    setState ( { counters } )
}

  const handleIncrement = (counter) =>{
    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value++;
    setState( {counters})
  }


  const handleDelete = (counterId) => {
    const counters = state.counters.filter(c => c.id !== counterId)
    setState( {counters})
  }

  return (
    <div className='main'>
      <div className='component'>
        <h4>Counter using functional component</h4>
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
        {state.counters.map( counter => 
          <CounterFunctionalComponent key={counter.id} counter={counter} onIncrement={handleIncrement} onDelete={handleDelete} /> 
        )}
      </div>
    </div>
  )
}

export default CounterFunctional