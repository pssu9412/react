// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다 : for문, if문 불가
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야 한다 : <main></main> 빈태그도 가능

import "./Main.css";

const Main = () => {
   /*
    const number = 100;
    const obj = {a : 1};
    
    return ( 
        <main>
            <h1>main</h1>
            <h2>{number % 2 ===0 ? "짝수" : "홀수"}</h2>
            <h2>{10}</h2>
            <h2>{number}</h2>
            {[1,2,3]}
            {obj.a}
        </main>
    );
    */
   
    const user = {
        name: "쑤",
        isLogin: false,
    };

    if(user.isLogin){
        return <div style={{
            backgroundColor: "aqua",
            borderBottom: "5px solid blue",
        }}>로그아웃</div>;
    }else{
        return (<div className="login">로그인</div>);
    }
    /*
    return (
        <>
        {user.isLogin ? (
            <div>로그아웃</div>
        ): (
            <div>로그인</div>
        )}
        </>
   )
     */

};

export default Main;