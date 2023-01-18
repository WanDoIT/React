// import img1 from '../img/img1.png';
// import img2 from '../img/img2.png';
// import img3 from '../img/img3.png';
// import img4 from '../img/profile.jpg';

import { useState } from "react";

/* 
이미지를 가져오는 방법
1. 외부 서버에서 경로를 참조받음(가장 일반적인 방법)

2. src폴더 밑에 img파일 참조 가능(선호하진않음)

3. public폴더 밑에 넣는경우 이미지를 바로참조 가능
*/
const IterationComponentQ = () => {

    const [img, setImg] = useState('/img/profile.jpg');


    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 }
    ]



    const [list, setList] = useState(arr);
    const newList = list.map((item,index) =>
        <div key={index}><img src={item.src} alt={item.title} width='100' onClick={() => handleClick(item.src)} />
            <p>상품 : {item.title}</p>
            <p>가격 : {item.price}</p> 
        </div>
    );
    console.log(newList);
    const handleClick = (a) => {
            setImg(a);
    }
    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/*  <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="200"/>
            <img src={img4} alt="제목a" width="200"/> */}
            {/* 반복할 요소의 모형 */}
            <img src={img} width='200' />
            <div style={{ display: "flex", justifyContent: "space-around" }}>

                {/* <img src="img/profile.jpg" alt="제목" width="100" />
                    <p>제목</p>
                    <p>가격</p> */}
                {newList}

            </div>
        </>
    )
}



export default IterationComponentQ;