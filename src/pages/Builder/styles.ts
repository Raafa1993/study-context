import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 340px auto 340px;
  justify-items: start;

  width: 100%;
  height: 85%;
  
  padding: 16px;
  gap: 40px;
  margin-top: 40px;

  background: #F8F8F8;
  border: 1px solid #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);

`;

export const PanelLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  /* background: #FFFFFF7A;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.03);
  border: 1px solid #FFFFFF;
  border-radius: 20px; */
`;

export const WidgetLeft = styled.div`

`;

export const PanelCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  background: lightskyblue;

  border-radius: 20px;
  position: relative;
`;

export const Controlers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 75%;
  height: 68px;

  background: #F8F8F8;
  border: 1px solid #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
`;

export const Phone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  box-shadow: 10px 10px 15px #00000005;
  position: relative;
`;

export const PhoneContent = styled.div`
  background-image: var(--image);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 371px;
  height: 95.2%;
`;

export const PhonePreview = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 371px;
  height: 95.2%;

  background: #c1c9d8;
  border-radius: 24px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;


export const PanelRight = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background: #FFFFFF7A;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.03);
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  
`;

export const WidgetRight = styled.div`

`;
