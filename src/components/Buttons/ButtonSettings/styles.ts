import styled, { css } from "styled-components";

interface PropsButton {
  active: boolean;
  title: string;
}

export const Container = styled.button<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: transparent;

  width: 40px;
  height: 40px;

  cursor: pointer;

  position: relative;

  ${(props) =>
    props.active
      && css`
          svg {
            path {
              fill: lightskyblue;
            }
          }
        `}

        button:hover {
    svg {
      path {
        fill: lightskyblue;
      }
    }
  }

  &:after {
    ${(props) =>
      props.active &&
      css`
        position: absolute;
        content: "";
        top: 49px;
        width: 60px;
        height: 5px;
        border-radius: 5px;
        background: lightskyblue;
        box-shadow: 0px 3px 8px #0766ff40;
      `}
  }

  .tooltip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 90%);
    border-radius: 6px;
    padding: 8px 20px;

    font-size: 13px;
    text-align: center;
    white-space: nowrap;
    color: #fff;

    background: #000;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    opacity: 0;
    pointer-events: none;
    z-index: 999;

    &::before {
      content: "";
      position: absolute;

      top: -10%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform: rotate(180deg);
      border-style: solid;
      border-color: #000000 transparent;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover {
    .tooltip {
      top: 50%;
      transition: all 0.5s ease;
      opacity: 1;
    }
  }

  * {
    transition: all 0.3s;
  }
`;
