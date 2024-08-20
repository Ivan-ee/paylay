import { Squash as Hamburger } from 'hamburger-react';

export const Burger = ({ isOpen, toggleMenu }) => {
    return (
        <div className="burger" onClick={toggleMenu}>
            <Hamburger toggled={isOpen} toggle={toggleMenu} distance="lg" size={20} rounded />
        </div>
    );
};
