import { useRef, useState } from "react";


const HookQ2 = () => {
    /* 
    실습(할일목록 만들기)
    1. state는 {todo:'',list:[]}로 관리하세요
    2. 할일 목록을 작성하고 클릭시, list에 인풋에 입력값을 추가하고 map을 통해서 화면을 그립니다.
    3. 등록된 이후에는 ref를 활용해서 input태그에 포커싱을 줍니다.
    */

    const [todolist, setTodolist] = useState({ todo: '', list: [] });

    const input = useRef();
    const newList = todolist.list.map((item,index) =>
        <li key={index}>{item}</li>
    )
    const handleChange = (e) => {
        setTodolist({ ...todolist, [e.target.name]: e.target.value })
    }

    const handleAdd = () => {
           setTodolist({ ...todolist, ['todo']: '', ['list']:todolist.list.concat(todolist.todo) })
           input.current.focus();
    } 
    const handleEnter = (e)=>{
        if(e.keyCode ===13) handleAdd()
    }
    
    return (
        <div>
            <h3>ref로 할일 목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" onChange={handleChange} ref={input} value={todolist.todo} onKeyUp={handleEnter} />
            <button onClick={handleAdd}>등록하기</button>
            <ul>
                {newList}
            </ul>
        </div>
    )


}

export default HookQ2;