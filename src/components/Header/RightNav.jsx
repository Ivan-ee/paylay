import {forwardRef} from "react";
import {SpecialBtn} from "../SpecialBtn.jsx";

export const RightNav = forwardRef(({open, setOpen}, ref) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={`nav ${open ? 'active' : ''}`}>
            <div className="content">
                <div className={'text regular_h5'}><a href={'#products'} onClick={handleClose}>Продукты</a></div>
                <div className={'text regular_h5'}><a href={'#opportunities'} onClick={handleClose}>Возможности</a></div>
                <div className={'text regular_h5'}><a href={'#busines'} onClick={handleClose}>Бизнес с PayLay</a></div>
                <div className={'text regular_h5'}><a href={'#faq'} onClick={handleClose}>FAQ</a></div>
                <div className={'text regular_h5'}><a href={'#cotnact'} onClick={handleClose}>Контакты</a></div>
            </div>
            <div onClick={handleClose}>
                <SpecialBtn style={'special-button-green'} />

            </div>
        </div>
    )
})
