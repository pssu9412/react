import './App.css'
import { useReducer, useRef, createContext } from 'react';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

// import emotion1 from './assets/emotion1.png';
// import emotion2 from './assets/emotion2.png';
// import emotion3 from './assets/emotion3.png';
// import emotion4 from './assets/emotion4.png';
// import emotion5 from './assets/emotion5.png';

// import { getEmotionImage } from './util/get-emotion-image';
// import Button from "./components/Button";
// import Header from "./components/Header"


// 1. "/" : 모든 일기를 조회하는 home 페이지
// 2. "/new" : 새로운 일기를 작성하는 new 페이지
// 3. "/diary" : 일기를 상세히 조회하는 diary 페이지
const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-11-27").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-11-26").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-10-22").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  }
]

function reducer(state,action){
  switch(action.type){
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : 
      return state.map(
        (item)=>String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE" : return state.filter((item)=> String(item.id) !== String(action.id));
    default: return state;
  }

}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const nav = useNavigate();
  // 페이지 이동할 때 Link 대신 쓸 수 있는 Hook
  const onClickButton= ()=>{
    nav('/new');
  }

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content)=>{
    dispatch({
      type:"CREATE",
      data:{
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }
  // 기존 일기 수정
  const onUpdate= (id, createdDate, emotionId, content)=>{
    dispatch({
      type: "UPDATE",
      data:{
        id, createdDate, emotionId, content
      }
    })
  }
  // 기존 일기 삭제
  const onDelete =(id) =>{
    dispatch({
      type: "DELETE",
      id
    })
  }

  return (
    <>
      {/* 
      이미지가 많이 필요할 땐 브라우저 용량이 과부하 될 수 있어서 public 폴더에 보관하는게 유용할 수 있지만,
      적은 이미지를 사용할 땐 src폴더를 사용하면 이미지를 최적화해서 불러오는 게 유용

      <div>
        <img src={'/emotion.png'} />
      </div> */}
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div> */}
{/* 
      <Button 
        text={123} 
        onClick={()=>{console.log('123버튼클릭')}}
        />
      <Button 
        text={123} 
        type={"POSITIVE"}
        onClick={()=>{console.log('123버튼클릭')}}
      />
      <Button 
        text={123} 
        type={"NEGATIVE"}
        onClick={()=>{console.log('123버튼클릭')}}
      /> */}
{/* 
      <button onClick={()=>{
        onCreate(new Date().getTime(), 1, "Hello");
      }}>일기 추가 </button>

      <button onClick={()=>{
        onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
      }}>일기 수정</button>

      <button onClick={()=>{
        onDelete(1);
      }}>일기 삭제</button> */}
      {/* Routes 컴퍼넌트 밖 요소는 모든 페이지에서 렌더링 됨 */}
{/* <div>
        Link : html에서 사용하는 <a> 태그와 같음
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}> New 페이지로 이동 </button> */}

      {/* Routes 컴퍼넌트 안에는 Route 컴퍼넌트만 들어갈 수 있음 */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider 
          value={(onCreate, onUpdate, onDelete)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
