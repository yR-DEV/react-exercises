import React, { useState } from 'react';
import Counter from './components/Counter'

const App =() => {

  const [counter, setCounter] = useState(0);

  const handleClick = num => {
    setCounter(counter + num);
  }

  return (
    <div>
  <h1>Counter: {counter}</h1>
    <Counter handleClick={handleClick} val={1}/>
    <Counter handleClick={handleClick} val={2}/>
    <Counter handleClick={handleClick} val={3}/>
    <Counter handleClick={handleClick} val={-1}/>
    </div>
  )
}


export default App;
