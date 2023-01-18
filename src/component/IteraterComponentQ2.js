import { useState } from "react";


const IterationComponentQ2 = () => {
    //1 - select태그는 컴포넌트반복으로 option태그를 생성합니다
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    
    //2 - data는 state로 관리하고 화면에 li태그로 반복을 합니다.
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];
 
    const [data1,setData1] = useState(data);

    const list = select.map((item,index)=> 
            <option value={item} key={index}>{item}</option>
        );
    const list2 = data1.map((item) => 
            <li key={item.id}>{item.type}-{item.teacher}</li>
        );
        

    const handleChange = (e) =>{
   
      setData1(data.filter(item => item.type == e.target.value ));
    }

    //3- select 박스가 체인지 되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 됩니다.
    
    //4 - 숙제: 검색기능만들기 - 대소문자 구분하지않고 ,teacher,type에 포함된데이터만 필터링
    const [search,setSearch] =useState('');

    const handleSearch = (e) =>{
        setSearch(e.target.value);
    }

    const go = () =>{
        setData1(data.filter(item => item.type.toLowerCase().includes(search.toLowerCase())||item.teacher.toLowerCase().includes(search.toLowerCase())))
    }

    const handleEnter = (e) =>{
        if(e.keyCode === 13) go();
        
    }

    return(
        <>
            <h3>컴포넌트 반복 실습</h3>
            Search: <input type='text' value={search} onChange={handleSearch} onKeyUp={handleEnter}/>
                    <button onClick={go}>검색</button>
            <br/>
            과목찾기<select onChange={handleChange}>
                {list}
            </select>
            <ul>
                {list2}
            </ul>
        </>
    )

    
}

export default IterationComponentQ2;