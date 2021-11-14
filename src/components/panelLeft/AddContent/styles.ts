import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% auto;
  width: 100%;
  height: 100%;
`;

export const ContentHeader = styled.div``;

export const ContentMain = styled.div`
  display: flex;
  width: 100%;
  background: #ffffff7a;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.03);
  border: 1px solid #ffffff;
  border-radius: 20px;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 12px;
    padding: 12px;

    width: 100%;
    height: 100%;
  }
`;

export const DragItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 14px;
  height: 90px;

  border: none;
  border-radius: 20px;
  transition: all 0.3s;
  cursor: move;

  &:hover {
    background: #fff;
    box-shadow: 0px 10px 15px #00000008;

    span {
      color: #000;
    }
  }

  span {
    font-size: 14px;
    color: #000;
    text-align: center;
    margin-top: 4px;
    white-space: nowrap;
  }
`;
