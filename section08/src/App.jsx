import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData =[
  {
    id:0,
    isDone:false,
    content: "React 공부하기",
    date: new Date().getTime()
  },
  {
    id:1,
    isDone:false,
    content: "밀린 빨래하기",
    date: new Date().getTime()
  },
  {
    id:2,
    isDone:false,
    content: "하누 산책하기",
    date: new Date().getTime()
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date : new Date().getTime()
    }

    setTodos([newTodo, ...todos]);
  };

  // 체크박스 관련 함수
  const onUpdate = (targetId) => {
    // todos State 값들 중에 targetId와 일치하는 id를 갖는 투두아이템 isDone 값 변경

    /*   삼항연산자 사용 
    setTodos(todos.map((todo)=> 
      todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo ))
    */
    setTodos(todos.map((todo)=>{
      if(todo.id === targetId){
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
      return todo;
    }))
  }

  const onDelete= (targetId) =>{
    setTodos(todos.filter((todo)=> todo.id !== targetId));
  }

  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section>
        <Editor onCreate={onCreate}/>
      </section>
      <section>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </section>
    </div>
  )
}

export default App
