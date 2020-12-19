import  React, { useContext } from 'react';
import PropsTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from "../context/navState";

const Menu = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 95%;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #ffffff;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: center;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  text-decoration: none;
  color: black;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
    const { isMenuOpen } = useContext(MenuContext);

    return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
    children: PropsTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <>
            <MenuLink href="/">Профіль</MenuLink>
            <MenuLink href="/">Мої івенти</MenuLink>
            <MenuLink href="/">Створити івент</MenuLink>
            <MenuLink href="/">Ком'юніті</MenuLink>
        </>
    ),
};
