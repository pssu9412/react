import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const inMount = useRef(false); 

  /*
    1. 마운트 : 탄생 
        useEffect(()=>{},[])
    2. 업데이트 : 변화, 리렌더링 
        useEffect(()=>{
          if(!isMount.current){ // 리렌더링 시에만 실행하는 방법
            isMount.current = true;
            return;
          }
            console.log("update");
          })
    3. 언마운트 : 죽음
  */

  useEffect(()=>{
  // deps (dependency array) : 의존성 배열
  // [] 배열 안의 값이 바뀌면 ()=>{} 콜백함수 실행
    console.log(`count: ${count} /  input: ${input}`);
  }, [count, input]);

  const onClickBT =(value) =>{
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickBT={onClickBT}/>
      </section>
    </div>
  )
}

export default App
