import './App.css';
import CounterClassComponent from './components/counterClassComponent';
import CounterFunctionalComponent from './components/counterFunctionalComponent';
import MoviesClassComponent from './components/moviesClassComponent';
import MoviesFunctionalComponent from './components/moviesFunctionalComponent';

function App() {
  return (
      <main className="container">
        <CounterClassComponent />
        <hr />

        <CounterFunctionalComponent />
        <hr />

        <MoviesClassComponent />
        <hr />

        <MoviesFunctionalComponent />
      </main>
  );
}

export default App;
