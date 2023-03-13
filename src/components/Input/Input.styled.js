import styled from "styled-components";

export const InputField = styled.input`
  max-width: 100%;
  margin: 0 auto;
  height: 56px;
  width: 100%;
  padding: 16px 16px 16px 48px;
  border-radius: 8px;
  margin-bottom: 32px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.54);
  border-color: rgba(0, 0, 0, 0.54);

  &:focus {
    border-color: green;
    outline: none; /* remove the default blue outline */
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-bottom: 61px;
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  background-color: white;
  padding: 0;
  top: 16px;
  left: 16px;
  svg {
    width: 24px;
    height: 24px;
    fill: rgba(0, 0, 0, 0.54);
  }
`;

export const InputWrapper = styled.div`
  /* display: flex;
  justify-content: center; */
`;
