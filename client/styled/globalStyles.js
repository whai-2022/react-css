import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.font};
    margin: 0;
    padding: 0;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.primary};
  }  
`
export default GlobalStyle

// Dark Mode
// background-color = ${props => (props.darkMode ? 'black' : 'white')}