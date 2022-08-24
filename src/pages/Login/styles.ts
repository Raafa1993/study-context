import styled from 'styled-components';

import backgroundLogin from '../../images/backgroundlogin.png';

export const Container = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100vh;

  padding: 20px;
  background: #1F1F48;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  max-width: 1072px;
  height: 100%;
  
  border-radius: 20px;
  
  `

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  background: #fff;
  border-radius: 20px 0 0 20px;

`
export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 80%;
  padding: 0 40px;

  form {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    margin-top: 40px;
  }

  form .field-group {
    flex: 1;
    display: flex;
  }

  form .field {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
  }

  form .field-group .field + .field {
    margin-left: 24px;
  }

  form .field-group input + input {
    margin-left: 24px;
  }
`

export const TitleForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 4px;

  h1 {
    font-size: 2rem;
    height: 48px;
    font-weight: bold;
    color: #8A99A8;
    margin: 40px 0 0 0;
    padding: 0px;
  }

  p {
    font-size: 1.37rem;
    color: #8A99A8;
  }

`

export const PanelRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7A77FA;
  border-radius: 0 20px 20px 0;

`
export const BackGroundLogin = styled.div`
  width: 100%;
  height: 100%;
  background: url(${backgroundLogin});
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 80px;
  box-sizing: border-box;
  border-radius: 0px 48px 48px 0px;

`
