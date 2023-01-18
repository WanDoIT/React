import { useState } from "react";


const EventComponent = () => {

    const [name, setName] = useState('');

    //이벤트 함수의 첫번째 매개변수에 이벤트에 대한 정보를 넣어줍니다.
    const handleName = (e)=>{
        setName(e.target.value);
    }

    //
    const [topic,setTopic] = useState('');
    const handleTopic = (e) =>{
        setTopic(e.target.value);
    }

    //클릭이벤트
    const handleClick = ()=>{
        alert(`${name}님의 주제는 ${topic}입니다`);
        setName('');
        setTopic('');
    }

    const handlePress = (e)=>{
        console.log(e)
        if(e.keyCode ===13 ){
            handleClick();
        }
    }

    return (
        <>
            <h3>리액트의 이벤트 핸들링(인풋데이터)</h3>
            <input type="text" name="name" onChange={handleName} onKeyUp={handlePress} value={name}/>
            <div>체인지된 결과: {name}</div>
            <input type="text" name="topic" onChange={handleTopic} value={topic} />
            <div>체인지된 결과: {topic}</div>

            <button type="button" onClick={handleClick}>클릭해</button>
        </>

    )


}


export default EventComponent;