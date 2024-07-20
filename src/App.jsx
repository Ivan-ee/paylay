import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {Description} from "./components/Description/Description.jsx";
import {Slider} from "./components/Slider/Slider.jsx";
import {WhyMe} from "./components/WhyMe/WhyMe.jsx";
import {Up} from "./components/Up/Up.jsx";
import {Any} from "./components/Any/Any.jsx";
import {Connect} from "./components/Connect/Connect.jsx";
import {Form} from "./components/Form/Form.jsx";
import {QA} from "./components/QA/QA.jsx";
import {Footer} from "./components/Footer/Footer.jsx";

function App() {

    return (
        <>
            <Header/>
            <Description/>
            <Slider/>
            <WhyMe/>
            <Up/>
            <Any/>
            <Connect/>
            <Form/>
            <QA/>
            <Footer/>
        </>
    )
}

export default App
