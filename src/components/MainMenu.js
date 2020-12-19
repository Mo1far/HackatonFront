import React, {useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from "../hooks/onClickOutside";
import  { MenuContext} from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import { SideMenu } from "./SideMenu";

import Scope from "../Scope.svg";

const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: #e5e5e5 none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;

const Logo = styled.div`
  display: flex;
  font-size: 34px;
  font-weight: bold;
  align-self: center;
  color: black;
`;

const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <header ref={node}>
            <Navbar>
                <a href={"/"}><img src={Scope} alt={"Scoped"} /></a>
                <Logo>LOGO</Logo>
                <HamburgerButton />
            </Navbar>
            <SideMenu />
        </header>
    );
};

export default MainMenu;