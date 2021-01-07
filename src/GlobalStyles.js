import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    overflow-y: hidden;
    color: white;
    background-image: url('./assets/background.jpg');
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    //background-image: linear-gradient(#fff, #bbb);
  }
  
  *::-webkit-scrollbar {
    display: none;
    width: 0px;
  }

  a {
    font: inherit;
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }
  
  .App{
    display: flex;
    flex-direction: column;
  }

  `

