import {useRef} from "react";
import useSmoothScroll from "./SmoothScroll.jsx";

export const SpecialBtn = ({style}) => {

    const headerRef = useRef(null);

    useSmoothScroll(headerRef);

    return (
        <div className={`special-button regular_h4 ${style}`} ref={headerRef}>
            <a href={'#btn'}>Подключиться</a>
        </div>
    )
}
