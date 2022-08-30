import styled, { keyframes } from "styled-components";

const shake = keyframes`
  25% {
    transform: translateX(4px);
    outline: red;
    outline-color: red;
  }

  50% {
    transform: translateX(-4px);
    outline: red;
    outline-color: red;
  }

  75% {
    transform: translateX(4px);
    outline: red;
    outline-color: red;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;

  #page-create-point {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  #page-create-point form {
    margin: 20px auto;
    padding: 42px;
    max-width: 730px;
    background: #fff;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
  }

  #page-create-point form h1 {
    font-size: 36px;
  }

  #page-create-point form fieldset {
    margin-top: 48px;
    min-inline-size: auto;
    border: 0;
  }

  #page-create-point form legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
  }

  #page-create-point form legend h2 {
    font-size: 24px;
  }

  #page-create-point form legend span {
    font-size: 14px;
    font-weight: normal;
    color: var(--text-color);
  }

  #page-create-point form .field-group {
    flex: 1;
    display: flex;
  }

  #page-create-point form .field {
    flex: 1;

    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  #page-create-point form .field input[type="text"],
  #page-create-point form .field input[type="email"],
  #page-create-point form .field input[type="number"] {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;

    &.errorInput {
      animation: ${shake} 300ms;
      outline-color: red;
      border: 2px solid red;
    }
  }

  #page-create-point form .field input::placeholder {
    color: #a0a0b2;
  }

  #page-create-point form .field label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  #page-create-point form .field :disabled {
    cursor: not-allowed;
  }

  #page-create-point form .field-group .field + .field {
    margin-left: 24px;
  }

  #page-create-point form .field-group input + input {
    margin-left: 24px;
  }

  #page-create-point form .field-check {
    flex-direction: row;
    align-items: center;
  }

  #page-create-point form button {
    width: 260px;
    height: 56px;
    background: var(--primary-color);
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  #page-create-point form button:hover {
    background: #2fb86e;
  }
`;

export const ContentDebounce = styled.div`

`;

export const StyledWrapper = styled.div`
  position: relative;
  width: 16rem;
`;

export const StyledTextbox = styled.input`
  height: 4.5rem;
  width: 16rem;
  padding: 0 1.5rem; 
  border-radius: 0.75rem;
  border: 1px solid #212025;
  background: #212025; 
  color: #f9f9f9;
  transition: all 0.3s;
  outline: none;
  &::placeholder { 
    color: rgba(255, 255, 255, 0.65);
  }
`;


export const StyledIcon = styled.div`
  position: absolute; 
  top: 54%;
  right: 1.5rem;

  transform: translateY(-50%); 
  color: rgba(255, 255, 255, 0.96); 
  font-size: 22px;
`

export const StyledResults = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  background: #212025;
  color: #f9f9f9;
  padding: 0.4rem 1.5rem; 
`;
