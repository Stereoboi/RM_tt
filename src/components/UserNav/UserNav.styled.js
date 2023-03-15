import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserImage = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
export const Username = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    color: green;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 10px;
  }
`;

export const LogOutBtn = styled.button`
  /* background-color: green; */
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  text-transform: uppercase;

  &:hover {
    /* color: white;
    background-color: green; */
    cursor: pointer;
    box-shadow: rgba(18, 110, 33, 0.71) 0px 0px 20px 0px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
