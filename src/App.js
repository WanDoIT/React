import { Fragment } from "react"
import './css/App.css' //css파일 경로 링크

//css모듈 파일링크
import styled from './css/App.module.css'

const App = () => {
    //p.261 - css스타일링
    // 직접스타일링하기 :  -은 카멜표기법으로 변경됩니다
    const myStyle = {
        color : "red",
        textAlign : "center"

    }

    return (
        <Fragment>
            <header style={{backgroundColor:"black"}} className="app_header">
                <p  style={myStyle}>헤더입니다(직접스타일링)</p>

            </header>
            <article className="app_article">
                css파일로 디자인하기
            </article>
            <section className={styled.app_wrap}>
                <div className={styled.app_item}>
                    <p>css디자인</p>
                    <input type="text" className="input_control"/>
                    <input type="password" className="input_control" />
                </div>

            </section>

        </Fragment>


    )

}


export default App;