import React from 'react'
import './App.css';
import CountersClass from './components/counter/countersClass';
import CounterFunctional from './components/counter/countersFunctional';
import Movie from './components/movie/movie';

function App() {
  return (
      <React.Fragment>
        <div className="counter">
        <CounterFunctional />
        <CountersClass/>
      </div>
        <div className='movie'>
          <Movie/>
        </div>
      </React.Fragment>
  );
}

export default App;
