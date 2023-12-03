import styled, { css } from "styled-components";
import style from "./style.module.scss";
export const Button = styled.button`
  background: #000;
  color: #fff;
  padding: 25px 10px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  border: none;
`;

const InputStyle = styled.input`
  border: none;
  color: var(--gray-c-4, #c4c4c4);
  border-radius: 10px;
  background: var(--gray-fa, #fafafa);
  padding: 25px 30px;
  align-items: center;
  width: 100%;
  &::placeholder {
    color: var(--gray-c-4, #c4c4c4);
  }
  &:focus {
    outline: none;
  }
`;

export const Input = ({ ...props }) => {
  return (
    <div className={style.inputWrappper}>
      <label className={style.inputLabel} >{props.label} </label>
      <InputStyle {...props} />
    </div>
  );
};
