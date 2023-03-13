import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 88px;
  max-width: 767px;

  /* @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 23px;
    padding-bottom: 100px;
    max-width: 1023px;
  } */
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    padding-left: 210px;
    padding-right: 210px;
    padding-top: 26px;
    padding-bottom: 188px;
    max-width: 1440px;
  }
`;
