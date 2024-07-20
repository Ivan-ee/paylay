import {Button} from "./Button.jsx";
import {useRef} from "react";
import useSmoothScroll from "../SmoothScroll.jsx";


export const Buttons = () => {

    const headerRef = useRef(null);

    useSmoothScroll(headerRef);

    return (
        <section className="buttons" ref={headerRef}>
            <Button href="#products" text={'Продукты'}/>
            <Button href="#opportunities" text={'Возможности'}/>
            <Button href="#busines" text={'Бизнес с PayLay'}/>
            <Button href="#faq" text={'FAQ'}/>
            <Button href="#cotnact" text={'Контакты'}/>
        </section>
    )
}