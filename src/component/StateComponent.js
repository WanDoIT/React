import { useState } from "react";



const StateComponent = () => {

    /* 
    state란 컴포넌트에서 변화하는 값을 의미합니다.
    state가 변경되면 컴포넌트 리렌더링을 시킵니다.
    함수형컴포넌트에서는 useState()를 사용합니다.
    */

    //함수형 컴포넌트에서는 useState()를 사용합니다
    // 1st 
    // let data = useState('초기값');

    //2nd
    let [data, setData] = useState("초기값");
    // console.log(data);
    let func = () => setData('변경');
    let enter = () => setData("입장");
    let exit = () => setData("퇴장");
   
    // state는 여러개일 수 있습니다.
    let [color,setColor]=useState("red");


    return (
        <>
            <h3 style={{'color': color}}>state값 : {data}</h3>
            <button onClick={func}>값 변경하기</button>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>

            <hr/>
            <button onClick={()=>setColor('red')}>붉은색</button>
            <button onClick={()=>setColor('blue')}>푸른색</button>
            <button onClick={()=>setColor('yellow')}>노란색</button>
        </>
    )


}

export default StateComponent;