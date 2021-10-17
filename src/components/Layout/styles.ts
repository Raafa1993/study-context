import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const Main = styled.div`
  flex: 1;
  padding: 0px 32px;
  overflow: auto;
  max-height: 100vh;
  @keyframes pageReload {
    from {
      filter: blur(50px);
    }
    to {
      filter: blur(0px);
    }
  }

  > div {
    animation: pageReload 0.5s;
  }
`;
