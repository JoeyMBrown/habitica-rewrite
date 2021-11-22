import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%; /*Ensures content cannot be larger than their parent container*/
    border: 1px solid black;
}
/*General Styles*/
html {
    font-size: 62.5%;/*Due to this font-size %, every 1rem = 10 pixels.*/
}
body {
    font-size: 1.6rem; /*declares the font size 16 px*/
    color: #4F4F4F;
    line-height: 1.5; /*Takes font size and multiplies it by this number to add space between lines*/
}
h1 {
    font-size: 5rem; 
}
h2 {
    font-size: 3.5rem;
}
section {
    padding: 4% 0;/*Adds top and bottom padding of 4% between sections.*/
}
a {
    text-decoration: none; /*Removes underline from links*/
    color: #4F4F4F; 
}
`


export default GlobalStyles;