import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState } from 'react';

// State 끌어올리기 (State Lifting)=> 단방향 데이터 흐름: 직관적
function App() {
  const [count, setCount] = useState(0);

  const onClickBT =(value) =>{
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickBT={onClickBT}/>
      </section>
    </div>
  )
}

export default App
