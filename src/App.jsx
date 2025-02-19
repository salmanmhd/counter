import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div className='container'>
        <div className='btns'>
          <button onClick={() => setCount((c) => c - 3)}>- - -</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>

        <h3>{count}</h3>

        <div className='btns'>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount((c) => c + 3)}>+ + +</button>
        </div>
      </div>

      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
