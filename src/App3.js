import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";
const App = () => {
    return (
        <Fragment>
            <h3>나의 App.JS</h3>
            {/* props */}
            <MyComponent name={"홍길동"} age={20} email={"aa@naver.com"} />
            <MyComponent2 name={"이순신"}/>
            <MyComponent2 name={"짱구"}/>
            <MyComponent3 name={"맹구"} />
        </Fragment>
    )
}

export default App;