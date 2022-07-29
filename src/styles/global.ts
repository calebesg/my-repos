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
    background-color: #121212;
  }

  button {
    cursor: pointer;
  }
`
