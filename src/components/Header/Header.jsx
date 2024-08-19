import {Logo} from "./Logo.jsx";
import {Buttons} from "./Buttons.jsx";
import {SpecialBtn} from "../SpecialBtn.jsx";
import {Burger} from "./Burger.jsx";


export const Header = () => {

    return (
        <header className="page-container header">
            <Logo/>
            <Buttons/>
            <SpecialBtn style={'special-button-green'}/>
            <div className="bgr">
                <Burger/>
            </div>
        </header>
    )
}