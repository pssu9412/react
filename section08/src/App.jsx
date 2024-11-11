import { useState, useEffect } from 'react'
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

  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section>
        <Editor />
      </section>
      <section>
        <List />
      </section>
    </div>
  )
}

export default App
