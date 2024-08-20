import {forwardRef} from "react";
import {SpecialBtn} from "../SpecialBtn.jsx";
import {Burger} from "./Burger.jsx";
import useSmoothScroll from "../SmoothScroll.jsx";

export const RightNav = forwardRef(({open, setOpen, headerRef}, ref) => {
    const handleClose = () => {
        setOpen(false);
    };

    useSmoothScroll(headerRef);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className={`nav ${open ? 'active' : ''}`} ref={headerRef}>
            <div className="burger-close">
                <Burger isOpen={open} toggleMenu={toggleMenu}/>
            </div>
            <div className="content">
                <div className={'text regular_h5'}><a href={'#products'} onClick={handleClose}>Продукты</a></div>
                <div className={'text regular_h5'}><a href={'#opportunities'} onClick={handleClose}>Возможности</a></div>
                <div className={'text regular_h5'}><a href={'#busines'} onClick={handleClose}>Бизнес с PayLay</a></div>
                <div className={'text regular_h5'}><a href={'#faq'} onClick={handleClose}>FAQ</a></div>
                <div className={'text regular_h5'}><a href={'#cotnact'} onClick={handleClose}>Контакты</a></div>
            </div>
            <div onClick={handleClose}>
                <SpecialBtn style={'special-button-footer'}/>
            </div>
        </div>
    );
});
