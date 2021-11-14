import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #393452;
  --colorText: #B4B1C6;
  
  --background: #F8F9FE;
  --white: #ffffff;

  --degradeDark: #6774EC;
  --degradeLight: #89ECF2;

  --image: url("../../Images/IphoneX.png");

}

body {
    background: '#f6f6f6';

    transition: all 0.2s;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

 // font-size: 16px (desktop)
 html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

    scroll-behavior: smooth;
  }
  // REM = 1rem = 16px

  button {
    cursor: pointer;
  }
`;
