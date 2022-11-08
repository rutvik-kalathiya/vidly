import './App.css';
import CounterClassComponent from './components/counterClassComponent';
import CounterFunctionalComponent from './components/counterFunctionalComponent';
import Movies from './components/movies';

function App() {
  return (
      <main className="container">
        <CounterClassComponent />
        <hr />
        <CounterFunctionalComponent />
      </main>
  );
}

export default App;
