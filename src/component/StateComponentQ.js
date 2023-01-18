import { useState } from "react";
import StateComponent from "./StateComponent";



const StateComponentQ= ()=>{

    let [count,setCount] = useState(0);
    //++count로 state를 직접 수정하면 안된다.
    let up = ()=> setCount(count+1);
    let down = ()=> setCount(count-1);
    let reset = ()=> setCount(0);
    console.log(count);
    return(
    <>
    <h3>실습</h3>
    <h3>카운트 : {count}</h3>
    <button onClick={up}>증가</button>
    <button onClick={down}>감소</button>
    <button onClick={reset}>초기화</button>
    </>
    )
}

export default StateComponentQ;