import { useState } from "react";



const EventComponent2 = ()=>{

    //state 를 객체로 관리
    const [data,setData]= useState({name:'', topic:''});

    const handleChange = (e) =>{
        //객체 안에서 key를 바꾸는 방법 ["키"] : 값
        const copy = {...data,[e.target.name]:e.target.value}; //spa
        setData(copy);
    }

    const handleClick = (e) =>{
        alert(`${data.name}님 할일: ${data.topic}`);
        setData({name:'',topic:''}); //state초기화
    }

    
    return (
        <>
            <h3>리액트 이벤트 핸들링(객체로)</h3>

            <input type='text' name="name" onChange={handleChange} value={data.name}></input>
            <h3>결과 : {data.name}</h3>
            <input type='text' name="topic" onChange={handleChange} value={data.topic}></input>
            <h3>결과 : {data.topic}</h3>

            <button type="button" onClick={handleClick}>클릭비</button>
            
        </>
    )
}



export default EventComponent2;