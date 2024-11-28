import './App.css'
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

// import emotion1 from './assets/emotion1.png';
// import emotion2 from './assets/emotion2.png';
// import emotion3 from './assets/emotion3.png';
// import emotion4 from './assets/emotion4.png';
// import emotion5 from './assets/emotion5.png';

import { getEmotionImage } from './util/get-emotion-image';

// 1. "/" : 모든 일기를 조회하는 home 페이지
// 2. "/new" : 새로운 일기를 작성하는 new 페이지
// 3. "/diary" : 일기를 상세히 조회하는 diary 페이지
function App() {
  const nav = useNavigate();
  // 페이지 이동할 때 Link 대신 쓸 수 있는 Hook
  const onClickButton= ()=>{
    nav('/new');
  }
  return (
    <>
      {/* 
      이미지가 많이 필요할 땐 브라우저 용량이 과부하 될 수 있어서 public 폴더에 보관하는게 유용할 수 있지만,
      적은 이미지를 사용할 땐 src폴더를 사용하면 이미지를 최적화해서 불러오는 게 유용

      <div>
        <img src={'/emotion.png'} />
      </div> */}
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      {/* Routes 컴퍼넌트 밖 요소는 모든 페이지에서 렌더링 됨 */}
      <div>
        {/* Link : html에서 사용하는 <a> 태그와 같음 */}
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}> New 페이지로 이동 </button>
      {/* Routes 컴퍼넌트 안에는 Route 컴퍼넌트만 들어갈 수 있음 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
