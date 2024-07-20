import {Logo} from "./Logo.jsx";
import {Buttons} from "./Buttons.jsx";
import {SpecialBtn} from "../SpecialBtn.jsx";


export const Header = () => {

    return (
        <header className="header">
            <Logo/>
            <Buttons/>
            <SpecialBtn style={'special-button-green'}/>
        </header>
    )
}