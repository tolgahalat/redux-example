// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseTwo from './components/IncreaseTwo';

function App() {
  return (
    <div>
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <DecreaseCounter></DecreaseCounter>
      <IncreaseTwo></IncreaseTwo>
    </div>
  );
}

export default App;
