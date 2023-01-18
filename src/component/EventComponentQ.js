import { useState } from "react";


const EventComponentQ = () => {

    const [menu, setMenu] = useState("");

    const changeMenu = (e) => {
        setMenu(e.target.value);
    }
    return (
        <>
            <h3>셀렉트 태그 핸들링 실습</h3>
            셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력
            <select onChange={changeMenu}>
                <option value=''>선택</option>
                <option value='피자'>피자</option>
                <option value='치킨'>치킨</option>
                <option value='버거킹'>버거킹</option>
            </select>
            <h3>선택한결과 </h3>
            {menu}
        </>
    )
}


export default EventComponentQ;