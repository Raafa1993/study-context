import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 40%;

  transition: all 0.3s ease-in-out;
`;

export const ButtonWidgetEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;
  padding: 4px;
  border: 1px solid #fff;
  border-radius: 4px;
  background: #0766ff;

  font-size: 12px;
  color: white;

`;

export const ButtonWidgetRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;
  padding: 4px;
  border: 1px solid #fff;
  border-radius: 4px;
  background: #E61D1D;

  font-size: 12px;
  color: white;
`;
