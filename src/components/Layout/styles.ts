import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  background: var(--background);
`;

export const Main = styled.div`
  flex: 1;
  overflow: auto;
  max-height: 100vh;
  padding: 20px;
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
