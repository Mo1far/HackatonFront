import React, { useState, createContext } from 'react';
import PropsTypes from 'prop-types';

export const MenuContext = createContext({
    isMenuOpen: true,
    toggleMenu: () => {},
});

const NavState = ({children}) => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    return(
        <MenuContext.Provider value={{ isMenuOpen,toggleMenuMode }}>{children}</MenuContext.Provider>
    );
};

NavState.propsTypes = {
    children: PropsTypes.node.isRequired,
};

export default NavState;



