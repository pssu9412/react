// import { useState } from 'react';
// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다
// 3. 나만의 훅(Custom Hook)을 만들 수 있다
/*
function useInput(){ 
    // 함수명 앞에 use 를 쓰면 내부에서 자동으로 커스텀훅으로 인식
    const [input, setInput] = useState("");
    const onChange = (e) =>{
        setInput(e.target.value);
    };

    return [input, onChange];
}
 */


import useInput from './../hooks/useInput';

const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>
            HookExam
            <input value={input} onChange={onChange}/>
        </div>
    )
}

export default HookExam;