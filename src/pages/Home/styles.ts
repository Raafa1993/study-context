import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: calc(100% - 80px);

  h1 {
    /* text-stroke: 3px #000000; */
    -webkit-text-stroke: 3px #000000;
    text-shadow: 5px 5px 0px #000000;

    font-family: 'Bungee', cursive;
    color: #b3d2ae;
    font-size: 5rem;

    text-transform: uppercase;

    ::selection {
      background-color: rgba(143, 68, 253, 0.6);
    }
  }
`;