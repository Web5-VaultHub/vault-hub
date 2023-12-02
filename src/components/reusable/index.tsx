import styled, { css } from "styled-components";

interface FlexContainerProps {
  $center?: boolean;
  $direction?: "row" | "column";
  $dark?: boolean;
}

export const Button = styled.button`
  background: transparent;
  border: 1px solid #000;
  color: #000;
  padding: 8px 16px;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid #000;
  color: #00;
  padding: 8px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  height: 100%;
  background: #fff;
  align-items: center;
  ${(props) =>
    props.$direction &&
    css`
      flex-direction: ${props.$direction};
    `}
  ${(props) =>
    props.$center &&
    css`
      justify-content: center;
   
    `}
`;
