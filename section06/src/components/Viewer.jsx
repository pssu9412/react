// import { useState } from "react";
// -> 부모자식 구조가 아닌 형제구조라서 props를 전달할 수 없음. 

const Viewer =({count}) => {
    // const [count, setCount] = useState(0);

    return (
        <div>
            <div> 현재 카운트 :</div>
            <h1>{count}</h1>
        </div>
    )
};

export default Viewer;