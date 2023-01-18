import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {

 const name = "hong";//변수
 const age = 20;//변수

const myStyle = {color : 'red',backgroundColor :'green',fontSize:15};

  return (
    <Fragment>
    <ul>
      <li>1.주석 alt shift a{`왜이렇게 어렵냐`} {/* 주석 */} </li>
      <li>2. return구문은 반드시 1개여야 합니다. 반드시하나의 태그를 리턴해야 합니다. </li>
      <li>3. div를 사용하고 싶지 않으면 Fragment컴포넌트를 사용합니다 </li>
      <li>4. 함수안에서 변수를 만들고 사용하고 싶으면 {name}를 사용합니다 </li>
      <li>5. if문 대신에 3항 연산자를 사용합니다.</li>
      <li>6. 화면에 그리고 싶은 내용이 없다면 null을 반환합니다.</li>
      <li>7. undefined을 반환하는 상황을 만들면 안됩니다.(렌더링은 가능)</li>
      <li>8. DOM에 직접 스타일을 하고싶은 경우는 객체로 묶고 속성은 카멜표기법 사용합니다.</li>
      <li>9. class속성 대신에 className을 사용합니다</li>
      <li>10. 홀로 사용하는 태그는 반드시 닫는 태그를 작성합니다.(예:{/*<input /><br/> */})</li>
    </ul>


    <div style={myStyle}>
      {name==='hong'? 'is hong' : 'is not hong'}
      {name==='lee'? <h3>이순신입니다</h3> : <h3>이순신이 아닙니다</h3>}
      {age===30? <h3>20입니다</h3> : null}
    </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ㅎㅇㅎㅇㅎㅇ
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Fragment>
  );
}

export default App;
