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

  const handleIncrementCounter = () => {
    console.log('Handle Drement Called');
    setState({ counters: [...state.counters, {id:5 , value: 0}] })
  }

  const handleDecrementCounter = () => {
    state.counters.pop();
    setState({ counters: [...state.counters ]});
  }

  return (
      <div className='component'>
        <h4>Counter using functional component</h4>
        <div className='center-col'>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item page-link" onClick={handleDecrementCounter}> - </li>
              <li class="page-item active">
                <span class="page-link">
                  {state.counters.length}
                  <span class="sr-only">(current)</span>
                </span>
              </li>
              <li class="page-item page-link" onClick={handleIncrementCounter}> + </li>
              <li class="page-item">
              </li>
            </ul>
          </nav>
          <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
        </div>
        {state.counters.map( counter => 
          <CounterFunctionalComponent key={counter.id} counter={counter} onIncrement={handleIncrement} onDelete={handleDelete} /> 
        )}
      </div>
  )
}

export default CounterFunctional