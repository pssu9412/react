

const Controller = ({onClickBT})=> {


    return (
        <div>
            <button
            onClick={()=>{
                onClickBT(-1);
            }}
            >-1</button>
            <button
            onClick={()=>{
                onClickBT(-10);
            }}
            >-10</button>
            <button
            onClick={()=>{
                onClickBT(-100);
            }}
            >-100</button>
            <button
            onClick={()=>{
                onClickBT(+100);
            }}
            >+100</button>
            <button
            onClick={()=>{
                onClickBT(+10);
            }}
            >+10</button>
            <button
            onClick={()=>{
                onClickBT(+1);
            }}
            >+1</button>
        </div>
    )
};

export default Controller;