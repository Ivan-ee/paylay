import {Logo} from "./Logo.jsx";
import {Buttons} from "./Buttons.jsx";
import {SpecialBtn} from "../SpecialBtn.jsx";
import {Burger} from "./Burger.jsx";
import {useRef} from "react";
import useSmoothScroll from "../SmoothScroll.jsx";



export const Header = () => {
    const headerRef = useRef(null);

    useSmoothScroll(headerRef);
    return (
        <div className="page-container header" ref={headerRef}>
            <div>
                <Logo/>
                <Buttons/>
                <SpecialBtn style={'special-button-green'}/>
            </div>
            <Burger/>
        </div>
    )
}