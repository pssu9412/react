import { useState } from 'react';

function useInput(){ 
    // 함수명 앞에 use 를 쓰면 내부에서 자동으로 커스텀훅으로 인식
    const [input, setInput] = useState("");
    const onChange = (e) =>{
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;