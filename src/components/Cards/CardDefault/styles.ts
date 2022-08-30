import styled, { keyframes } from "styled-components";

const appearFromLeft  = keyframes`
  0% {
    transform: translateX(-50px);
  }

  75% {
    transform: translateX(12px);
  }

  100% {
    transform: translateX(0px);
  }
`

const appearFromRight  = keyframes`
  0% {
    transform: translateX(50px);
  }

  75% {
    transform: translateX(-12px);
  }

  100% {
    transform: translateX(0px);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--primary);
  padding: 2rem 1.5rem;
  border-radius: 1rem;


  .infoCard {
    display: flex;
    flex-direction: column;
    gap: 0.10rem;
    animation: ${appearFromRight} ease-in-out 0.85s;

    h2 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--colorText);
    }

    h3 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
  }

  .icon {
    display: grid;
    place-items: center;

    width: 4rem;
    height: 4rem;

    background-color: #8f44fd;
    border-radius: 50%;
    animation: ${appearFromLeft} ease-in-out 0.85s;
  }
`