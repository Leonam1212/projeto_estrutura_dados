
  
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --whiteCity: #dfe6e9;
        --white: #f5f5f5;
        --black: #0c0d0d;
        --red: #eb4d4b;
        --EletromagneticColor:#2f3640;
        --blue: #5352ed
    }
    body {
        font-family: 'Raleway', sans-serif;
        background: var(--EletromagneticColor);
    }
    
    body, input, button {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`