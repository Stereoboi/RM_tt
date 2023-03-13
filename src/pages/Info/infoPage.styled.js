import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackLinkItem = styled(NavLink)`
  position: absolute;
  left: 50px;
  top: 81px;
  display: flex;
  width: 150px;
  align-items: center;
  text-decoration: none;
  color: black;
  transition: color 250ms ease-in-out;
  &:hover {
    color: green;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const LinkText = styled.p`
  margin-left: 8px;
  font-size: 18px;
  line-height: 21.04px;
  font-weight: 700;
  font-family: Karla;
`;
