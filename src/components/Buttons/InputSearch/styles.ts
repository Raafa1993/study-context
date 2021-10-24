import styled, { css } from "styled-components";

interface PropsButton {
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 44px;

  font-size: 14px;
  font-weight: normal;
  color: var(--primary);
  background: var(--background);
  padding: 16px;

  border: 1px solid var(--primary);
  border-radius: 18px;
 
  ${props =>
    props.isFocused &&
    css`
      border-color: var(--primary);
    `}

  input {
    flex: 1;
    width: 100%;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    background: transparent;
    border: 0;
    color: var(--primary);
    &::placeholder {
      color: #bfbfcc;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
