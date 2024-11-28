import { useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
// import Exam from './components/Exam'

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

function reducer(state, action){
  switch(action.type){
    case 'CREATE': 
      return [action.data, ...state];
    case 'UPDATE': 
      return state.map((item)=>item.id===action.targetId
              ? {...item, isDone: !item.isDone} :item);
    case 'DELETE':
      return state.filter((item)=>item.id !== action.targetId);
    default: return state;
  }
}

// export const TodoContext = createContext();

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data:{
        id: idRef.current++,
        isDone: false,
        content: content,
        date : new Date().getTime()
      }
    })
    
  },[]);

  // 체크박스 관련 함수
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId :targetId
      
    })
  }, []);

  /*
  const onDelete= (targetId) =>{
    dispatch({
      type:'DELETE',
      targetId :targetId
    })
  } */

  // 기능 구현 후 최적화 하기!!
  const onDelete = useCallback((targetId) =>{
    dispatch({
      type:'DELETE',
      targetId :targetId
    })
  }, []);

  const memoDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete}
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <TodoContext.Provider 
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete
      }}> */}

      {/* context 분리하기 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      {/* </TodoContext.Provider> */}
    </div>
  )
}

export default App
