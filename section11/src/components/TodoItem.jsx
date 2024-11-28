import { TodoDispatchContext } from '../App';
import './TodoItem.css';
import {memo, useContext} from 'react';

const TodoItem = ({id, isDone, content, date})=> {
    // const {onUpdate, onDelete} = useContext(TodoContext);

    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    const onChangeCheckbox = ()=>{
        onUpdate(id);
    }

    const onClickDeleteBt = ()=>{
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input 
                onChange={onChangeCheckbox} 
                checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteBt}>삭제</button>
        </div>
    )
}

/*
// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps)=>{
    // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isDone !== nextProps.isDone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;

    return true;
});
*/

// useCallback 사용시
export default memo(TodoItem);