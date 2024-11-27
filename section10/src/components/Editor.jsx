import './Editor.css'
import {useState, useRef } from "react";

const Editor = ({onCreate}) => {
    const [content, setContent]= useState("");
    const contentRef= useRef();

    const onChangeContent =(e)=>{
        setContent(e.target.value);
    }

    const onKeydown =(e)=>{
        if(e.keyCode === 13){
            onSubmit;
        }
    }

    const onSubmit = ()=>{
        if(content ===""){
            contentRef.current.focus(); // 입력칸 포커스
            return;
        }
        onCreate(content);
        setContent(""); // 입력칸 비워주기
    }
    
    return (
        <div className="Editor">
            <input 
                ref={contentRef}
                value={content}
                onKeyDown={onKeydown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..." />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;