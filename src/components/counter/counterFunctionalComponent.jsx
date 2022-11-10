import React from 'react';
import './counter.css';

function CounterFunctionalComponent(props) {

  function getBadgeClasses () {
    let cal = props.counter.value % 2;
    let classes = 0;
    classes = cal === 0 ? 'warning' : 'primary';
    return classes
  }

  function getCount() {
    if (props.counter.value === 0) return 'Zero';
    return props.counter.value 
  }
  return (
    <React.Fragment>
      <div className='component-header'>
        <div className='component-btn'>
          <span className={`badge m-2 badge-${getBadgeClasses()}`}>{getCount()}</span>
          <button className='btn btn-secondary btn-sm' onClick={() => props.onIncrement(props.counter)}>Increment</button>
          <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.counter.id)}>Delete</button>
        </div>
        <br />
      </div>
    </React.Fragment>
  )
}


export default CounterFunctionalComponent