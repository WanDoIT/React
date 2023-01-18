import { useState } from "react";
import IterationComponentQ2 from "./component/IteraterComponentQ2";
import HookEffect from "./Hook/HookEffect";
import HookQ from "./Hook/HookQ";
import HookQ2 from "./Hook/HookQ2";
import HookRef from "./Hook/HookRef";

const App = () => {
    /* 
    p.223
    1.필수 훅
    useState()
    컴포넌트에서 상태값을 제어하는 가장 기본이 되는 hook

    useEffect()
    컴포넌트의 라이프사이클(생명주기)를 다룹니다.
    mount, mount이후,state변경될때, unmount이전에 특정 작업을 수행할 수 있습니다.
    */
    const [visible,setVisible] = useState(true);

    const handleClick = () =>{
        setVisible(!visible)
    }


    return(
        <>
        {/* effect훅 */}
        <button onClick={handleClick}>{visible ? "숨기기" : "보이기"}</button> <br/>

        {visible ? <HookEffect/> : null }
        
        {/* ref훅 */}
        <hr/>
        <HookRef/>
        {/* 훅 실습 */}
        <hr/>
        <HookQ/>

        <hr/>
        <HookQ2/>
        </>
    )


}

export default App;