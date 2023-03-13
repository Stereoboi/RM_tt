import styled from "styled-components";
import logo_img from "../../media/images/logo_1x.png";

export const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  margin: 0 auto;
  height: 104px;
  width: 312px;
  margin-bottom: 32px;
  background-image: url(${logo_img});
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 400px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1024px) {
    height: 200px;
    width: 600px;
    margin-bottom: 16px;
  }
`;
