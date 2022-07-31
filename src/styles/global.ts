import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input, button, body {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: #fafafa;
    outline: none;
  }

  body {
    background-color: #181818;
    scrollbar-width: thin;
    scrollbar-color: #333 transparent;  
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 6px;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`
