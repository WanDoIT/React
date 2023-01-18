import { useEffect, useRef, useState } from "react";


const HookQ = ()=>{

    const [id,setId] = useState('');
    const [pw,setPw] = useState('');
    const idTag = useRef();
    const pwTag = useRef();


    const handleId = (e) =>{
        setId(e.target.value)
    }

    const handlePw= (e)=>{
        setPw(e.target.value)
    }
    
    const handleClick = () => {
        if(id===''){
            idTag.current.focus();
        }else if(pw===''){
            pwTag.current.focus();
        }else {
            alert(`id:${id}// pw:${pw}`)
        }
    }
    
    const idEnter =(e)=>{
       if(e.keyCode===13) pwTag.current.focus();
    }

    const pwEnter =(e)=>{
        if(e.keyCode===13) handleClick();
     }

    useEffect(()=>{
        idTag.current.focus();
    },[])

    return (
        /* 
        1. 컴포넌트가 마운트된 이후한번만 id태그에 포커스를 줍니다.

        2. id,pw는 state로 관리합니다.
        로그인 버튼 클릭 시 공백이라면 공백인 태그에 포커스를 주세요.
        로그인버튼 클릭 시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요.
        */

        <div>
            <h3>훅 실습</h3>
            <input type='text' name="id" placeholder="아이디" ref={idTag} onChange={handleId} onKeyUp={idEnter} value={id}/>
            <input type='password' name="pw" placeholder="비밀번호" ref={pwTag} value={pw} onKeyUp={pwEnter} onChange={handlePw}/>
            <button onClick={handleClick}>로그인</button>
        </div>
    )

}

export default HookQ;