import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardItem = styled.li`
  width: 312px;
  height: 308px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  svg {
    opacity: 0;
  }
  &:hover,
  &:focus {
    svg {
      fill: rgb(18, 110, 33);
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0px 5px 14px 2px rgb(18 110 33 / 71%);
  }
  @media screen and (min-width: 1024px) {
    width: 240px;
    height: 244px;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  object-position: center 35%;

  width: 312px;
  height: 232px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  @media screen and (min-width: 1024px) {
    width: 240px;
    height: 168px;
  }
`;

export const List = styled.ul`
  padding: 12px 16px;
`;
export const Item = styled.li``;
export const Name = styled.p`
  font-family: Roboto;
  color: black;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.6px;
  letter-spacing: 0.15px;
  margin-bottom: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 208px;
`;
export const Race = styled.p`
  font-family: Roboto;
  color: black;
  font-weight: 400;
  font-size: 14px;
  line-height: 26.88px;
  letter-spacing: 0.25px;
`;

export const CardLink = styled(NavLink)`
  text-decoration: none;
`;

export const AddBtn = styled.button`
  position: absolute;
  background-color: transparent;
  bottom: 0;
  right: 0;
  svg {
    /* fill: ${(props) => {
      if (props.isAdded) {
        console.log("asd");
        return "red";
      }
    }}; */

    width: 23px;
    height: 23px;
  }
`;
export const RemoveBtn = styled.button`
  position: absolute;
  background-color: transparent;
  bottom: 0;
  right: 0;
  svg {
    width: 23px;
    height: 23px;
  }
`;
