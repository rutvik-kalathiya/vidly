import React from 'react'
import CounterClassComponent from './counterClassComponent'
import CounterFunctionalComponent from './counterFunctionalComponent'

function Counter() {
  return (
    <div>
      <CounterClassComponent />
      <hr />
      <CounterFunctionalComponent />
      <hr />
    </div>
  )
}

export default Counter