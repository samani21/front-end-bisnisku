// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const LandingPageStyle = createGlobalStyle`
:root {
    --primary-color: #4361ee;
    --secondary-color: #3f37c9;
    --accent-color: #4895ef;
    --text-color: #2b2d42;
    --light-color: #f8f9fa;
    --dark-color: #212529;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    color: var(--text-color);
    line-height: 1.6;
    padding-top: 80px;
}
`;

export default LandingPageStyle;
