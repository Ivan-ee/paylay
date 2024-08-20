import {Logo} from "./Logo.jsx";
import {Buttons} from "./Buttons.jsx";
import {SpecialBtn} from "../SpecialBtn.jsx";
import {Burger} from "./Burger.jsx";
import {useRef, useState} from "react";
import useSmoothScroll from "../SmoothScroll.jsx";
import {RightNav} from "./RightNav.jsx";

export const Header = () => {
    const headerRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

    useSmoothScroll(headerRef);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <div className="page-container header" ref={headerRef}>
                <Logo/>
                <Buttons/>
                <SpecialBtn style={'special-button-green'}/>
                <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
            <RightNav open={isOpen} setOpen={setOpen} headerRef={headerRef} />
        </>
    );
}
