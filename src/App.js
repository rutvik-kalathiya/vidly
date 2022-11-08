import './App.css';
import CounterClassComponent from './components/counterClassComponent';
import CounterFunctionalComponent from './components/counterFunctionalComponent';

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
