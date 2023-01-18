import { useState } from "react";


const EventComponentQ2 = () => {
/* 
    const [data,setData] = useState('');
    const [addData,setAddData] = useState('');

    const handleData = (e) => {
        setData(e.target.value); //내부적으로 비동기적으로 변경되므로 콘솔출력시 이전값 출력
    }
    const handleAdd = ()=>{
        setAddData(data);
        setData('');
    }
 */
    //state를 객체로 관리
    const [form, setForm] = useState({data:'',result:''});

    const handleChange = (e) =>{
        setForm({data:e.target.value, result:form.result});
    }
    const handleClick = () =>{
        setForm({data:'', result:form.data});

    }
    return (
        <>
            <h3>인풋데이터 핸들링(실습)</h3>
            클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리
            <br/>
            <input type='text' onChange={/* handleData */handleChange} value={form.data/* data */}></input>

            <button onClick={/* handleAdd */handleClick}>추가하기</button>

            <h3>결과</h3>
            {/* addData */form.result}
        </>
    )
}


export default EventComponentQ2;