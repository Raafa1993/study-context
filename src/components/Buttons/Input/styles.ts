import styled from "styled-components";

interface Props {
  value: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 56px;
  padding: 14px 14px;

  background: #f0f0f5;
  border-radius: 8px;
  border: 1px solid #f0f0f5;
  color: #6c6c80;

  display: flex;
  align-items: center;
  position: relative;

  * {
    transition: all 0.2s;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    width: 100%;
    font-size: 16px;
    background: transparent;
    outline: none;
    border: 0;
    color: #000;
    padding-top: ${(props) => (props.value ? "8px" : "0px")};
    &::placeholder {
      color: #6c6c80;
      font-size: 14px;
    }
  }

  label {
    font-size: 14px;
    font-weight: 500;
    margin-right: 5px;
    position: absolute;

    top: ${(props) => (props.value ? "6px" : "15px")};
    font-size: ${(props) => (props.value ? "10px" : "16px")};
  }
`;

export const Error = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: -22px;

  * {
    animation: fadeInUp 0.4s linear;
  }

  span {
    font-size: 12px;
    font-weight: 600;
    color: #c53030;
  }
`;
