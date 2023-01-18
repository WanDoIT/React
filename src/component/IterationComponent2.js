import { useState } from "react";



const IterationComponent2 = () => {

    //1. 반복할 데이터(state로 관리)
    const arr = [
        { id: 1, topic: 'hello' },
        { id: 2, topic: 'bye' },
        { id: 3, topic: 'CU' }
    ];

    const [list, setList] = useState(arr);

    //2. map함수를 이용해서 li태그로 생성
    const newList = list.map(item =>
        <li key={item.id} onDoubleClick={() => handleRemove(item.id)}>
            {item.topic}
        </li>);

    //3. 인풋데이터 관리
    const [data, setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value);
    }
    //4.추가하기버튼 클릭 시 input의 값을 list의 마지막에 추가

    const handleClick = () => {
        let obj = { id: list[list.length - 1].id + 1, topic: data };

        let newArr = list.concat(obj);//리스트에 obj에 합쳐진 새로운 리스트 반환.
        setList(newArr);
        setData('');
    }
    //5. 삭제기능
    //화살표 함수는 익명함수이기때문에 호이스팅 불가
    //이벤트안에서 함수를 호출로 연결하는 방법
    //onCLick= {() => 함수()}
    const handleRemove = (a) => {
        // console.log(a); //키
        //filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열 생성
        // const ex = [1,2,3,4,5].filter( (item) => item !=3 );
        // console.log(ex)
       const newList =  list.filter(item => item.id !=a );
       setList(newList);


    }


    return (
        <>
            <h3>목록 추가하기</h3>
            <input type='text' onChange={handleChange} value={data} />
            <button type='button' onClick={handleClick}>추가하기</button>
            <ul>
                {newList}

            </ul>
        </>
    )

}

export default IterationComponent2;