import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 64px 25px 85px 25px;
  @media screen and (min-width: 768px) {
    padding-top: 76px;
    padding-bottom: 142px;
  }
`;
export const Image = styled.img`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
export const NameText = styled.p`
  margin-top: 34px;
  margin-bottom: 34px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 32px;
  line-height: 29.5px;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 48px;
    font-size: 48px;
    line-height: 48px;
  }
`;
export const InfoText = styled.p`
  margin-bottom: 16px;

  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 20.4px;
  letter-spacing: 0.15px;
  color: rgba(110, 121, 140, 1);
  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
  }
`;
export const List = styled.ul`
  width: 312px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 412px;
  }
`;
export const Item = styled.li`
  /* height: 64px; */

  padding: 9px 0 12px 16px;
`;
export const ItemTypeText = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
export const ItemDescriptionText = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.25px;
  color: rgba(110, 121, 140, 1);
`;
export const InfoWrapper = styled.div`
  width: 312px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 412px;
  }
`;
