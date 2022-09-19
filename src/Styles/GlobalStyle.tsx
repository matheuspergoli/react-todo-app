import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    list-style: none;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }
`

export default GlobalStyle
