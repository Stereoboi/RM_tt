import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-family: ${(p) => p.theme.fonts.main};
  &.active {
    color: white;
    background-color: green;
  }
`;
export const AuthLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-family: ${(p) => p.theme.fonts.main};
  &.active {
    color: white;
    background-color: green;
  }
`;

export const NavWrapper = styled.nav`
  height: 60px;
  box-shadow: rgb(18 110 33 / 71%) -2px 1px 22px 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const LinkWrappers = styled.div`
  display: flex;
  align-items: center;
`;
