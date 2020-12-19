import React from 'react';
import NavState from "../context/navState";
import MainMenu from "./MainMenu";

const Header = () => {
    return(
        <div>
            <NavState>
                <MainMenu/>
            </NavState>
        </div>
    );
};

export default Header;

