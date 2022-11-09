import './App.css';
import CountersClass from './components/counter/countersClass';
import CountersFunctional from './components/counter/counterFunctionalComponent';
import Movie from './components/movie/movie';

function App() {
  return (
      <main className="container">
        <CountersClass/>
        <Movie/>
      </main>
  );
}

export default App;
